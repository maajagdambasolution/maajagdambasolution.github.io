"use client";

import Link from "next/link";
import { jsPDF } from "jspdf";
import { useState } from "react";
import {
  company,
  pricingFilters,
  pricingServices,
  type PricingCategory,
  type PricingService,
} from "@/lib/site-data";

function getPhoneLink(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

function getWhatsAppLink(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

function getSearchableText(service: PricingService) {
  return `${service.name} ${service.category} ${service.description} ${service.price}`.toLowerCase();
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

async function loadBase64File(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load font: ${url}`);
  }

  const buffer = await response.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = "";

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
}

export function PricingPage() {
  const pdfCompanyName = "MAA JAGDAMBA SOLUTION PVT. LTD.";
  const pdfFooterName = "Maa Jagdamba Solution Pvt. Ltd.";
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | PricingCategory>(
    "All"
  );

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredServices = pricingServices.filter((service) => {
    const matchesCategory =
      activeCategory === "All" || service.category === activeCategory;
    const matchesSearch =
      normalizedSearch.length === 0 ||
      getSearchableText(service).includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  async function downloadPdf() {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 40;
    const headerBarHeight = 100;
    const headerTextTop = 52;
    const footerTop = pageHeight - 56;
    const contentTop = 120;
    const contentBottom = pageHeight - 78;
    const contentWidth = pageWidth - margin * 2;
    const serviceColumnWidth = 270;
    const categoryColumnWidth = 120;
    const priceColumnWidth = contentWidth - serviceColumnWidth - categoryColumnWidth;
    const rowPadding = 12;
    const lineHeight = 14;
    const updateDate = formatDate(new Date());
    let y = contentTop;

    const fontBase64 = await loadBase64File("/Geist-Regular.ttf");
    doc.addFileToVFS("Geist-Regular.ttf", fontBase64);
    doc.addFont("Geist-Regular.ttf", "Geist", "normal");
    doc.setFont("Geist", "normal");

    const drawWatermark = () => {
      doc.setTextColor(244, 244, 244);
      doc.setFont("Geist", "normal");
      doc.setFontSize(30);
      doc.text(pdfCompanyName, pageWidth / 2, pageHeight / 2, {
        align: "center",
        angle: 35,
      });
    };

    const drawHeader = () => {
      const drawCenteredPartsLine = (
        lineY: number,
        parts: Array<{ text: string; bold?: boolean }>
      ) => {
        const fontSize = 9;
        let totalWidth = 0;

        parts.forEach((part) => {
          doc.setFont(part.bold ? "helvetica" : "Geist", part.bold ? "bold" : "normal");
          doc.setFontSize(fontSize);
          totalWidth += doc.getTextWidth(part.text);
        });

        let cursorX = pageWidth / 2 - totalWidth / 2;
        parts.forEach((part) => {
          doc.setFont(part.bold ? "helvetica" : "Geist", part.bold ? "bold" : "normal");
          doc.setFontSize(fontSize);
          doc.text(part.text, cursorX, lineY);
          cursorX += doc.getTextWidth(part.text);
        });
      };

      doc.setFillColor(11, 31, 63);
      doc.rect(0, 0, pageWidth, headerBarHeight, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("times", "bold");
      doc.setFontSize(18);
      doc.text(pdfCompanyName, pageWidth / 2, 22, { align: "center" });
      doc.setFont("Geist", "normal");
      doc.setFontSize(11);
      doc.text("Our Services & Pricing", pageWidth / 2, 36, { align: "center" });

      y = contentTop;
      doc.setTextColor(255, 255, 255);
      drawCenteredPartsLine(headerTextTop, [
        { text: "CIN: " },
        { text: company.cin, bold: true },
        { text: "    GSTIN: " },
        { text: company.gstin, bold: true },
      ]);
      drawCenteredPartsLine(headerTextTop + 14, [
        { text: "Email: " },
        { text: company.emailPlaceholder, bold: true },
        { text: "    Phone: " },
        { text: company.phonePlaceholder, bold: true },
      ]);
      drawCenteredPartsLine(headerTextTop + 28, [
        { text: "WhatsApp: " },
        { text: company.whatsappPlaceholder, bold: true },
        { text: "    Updated: " },
        { text: updateDate, bold: true },
      ]);
    };

    const drawTableHeader = () => {
      doc.setFillColor(236, 243, 255);
      doc.rect(margin, y - 6, contentWidth, 26, "F");
      doc.setDrawColor(207, 219, 239);
      doc.rect(margin, y - 6, contentWidth, 26);
      doc.setTextColor(26, 36, 51);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("Service", margin + 8, y + 11);
      doc.text("Category", margin + serviceColumnWidth + 8, y + 11);
      doc.text("Price", margin + serviceColumnWidth + categoryColumnWidth + 8, y + 11);
      y += 28;
    };

    const drawFooter = (pageNumber: number) => {
      doc.setPage(pageNumber);
      doc.setDrawColor(210, 219, 235);
      doc.line(margin, footerTop - 18, pageWidth - margin, footerTop - 18);
      doc.setTextColor(45, 57, 75);
      doc.setFont("Geist", "normal");
      doc.setFontSize(8.2);
      const disclaimerLine =
        "Disclaimer: Prices are indicative and may vary based on business requirements, government fees, and document complexity.";
      const officeAddressLine =
        `Office Address: ${company.addressLines.join(", ")}`;
      doc.text(disclaimerLine, pageWidth / 2, footerTop, { align: "center" });
      doc.text(officeAddressLine, pageWidth / 2, footerTop + 11, { align: "center" });
      doc.setFont("helvetica", "bold");
      doc.text(`©2026 ${pdfFooterName}`, pageWidth / 2, footerTop + 24, { align: "center" });
    };

    const addPage = () => {
      doc.addPage();
      drawWatermark();
      drawHeader();
      y = contentTop + 36;
      drawTableHeader();
    };

    const ensureSpace = (requiredHeight: number) => {
      if (y + requiredHeight > contentBottom) {
        addPage();
      }
    };

    drawWatermark();
    drawHeader();
    drawTableHeader();

    pricingServices.forEach((service, index) => {
      const serviceLines = doc.splitTextToSize(service.name, serviceColumnWidth - 16);
      const categoryLabel = `${service.category} Services`;
      const categoryLines = doc.splitTextToSize(categoryLabel, categoryColumnWidth - 16);
      const priceLines = doc.splitTextToSize(service.price, priceColumnWidth - 16);
      const rowHeight =
        Math.max(serviceLines.length, categoryLines.length, priceLines.length) *
          lineHeight +
        rowPadding;

      ensureSpace(rowHeight + 6);

      const rowFill = index % 2 === 0 ? [250, 251, 255] : [245, 247, 250];
      doc.setFillColor(rowFill[0], rowFill[1], rowFill[2]);
      doc.rect(margin, y - 4, contentWidth, rowHeight, "F");
      doc.setDrawColor(230, 230, 230);
      doc.rect(margin, y - 4, contentWidth, rowHeight);

      doc.setTextColor(26, 36, 51);
      doc.setFont("Geist", "normal");
      doc.setFontSize(9.5);
      doc.text(serviceLines, margin + 8, y + 9);
      doc.text(categoryLines, margin + serviceColumnWidth + 8, y + 9);
      doc.text(priceLines, margin + serviceColumnWidth + categoryColumnWidth + 8, y + 9);
      y += rowHeight;
    });

    const pageCount = doc.getNumberOfPages();
    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
      drawFooter(pageNumber);
    }

    doc.save("Maa-Jagdamba-Solution-Service-Rates.pdf");
  }

  return (
    <>
      <section className="section section-muted pricing-list-section">
        <div className="container">
          <label className="pricing-search-field pricing-search-field-hero" htmlFor="pricing-search">
            <span>Search services</span>
            <input
              id="pricing-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search GST, company registration, compliance, certificates..."
            />
          </label>

          <div className="pricing-toolbar">
            <div className="pricing-filters" aria-label="Pricing filters">
              {pricingFilters.map((filter) => {
                const isActive = activeCategory === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    className={isActive ? "pricing-filter-button active" : "pricing-filter-button"}
                    onClick={() => setActiveCategory(filter.value)}
                    aria-pressed={isActive}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="pricing-results">
            Showing {filteredServices.length} of {pricingServices.length} services
          </p>

          <div className="pricing-table-shell" aria-label="Pricing table">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <tr key={service.name}>
                      <td>
                        <div className="pricing-service-name">
                          <strong>{service.name}</strong>
                          {service.featured ? (
                            <span className="pricing-popular-badge">Popular</span>
                          ) : null}
                        </div>
                        <p className="pricing-table-description">{service.description}</p>
                      </td>
                      <td>
                        <span className="pricing-category-badge">
                          {service.category} Services
                        </span>
                      </td>
                        <td className="pricing-price-cell">{service.price}</td>
                      <td>
                        <Link
                          href={`/contact?service=${encodeURIComponent(service.name)}`}
                          className="btn btn-outline pricing-inline-action"
                        >
                          Get Quote
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="pricing-empty-state">
                      No services match your search. Try a different keyword or filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="pricing-card-shell card-grid">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <article key={service.name} className="pricing-card info-card">
                  <div className="pricing-card-top">
                    <div>
                      <p className="pricing-card-category">{service.category} Services</p>
                      <h2>{service.name}</h2>
                    </div>
                    {service.featured ? (
                      <span className="pricing-popular-badge">Popular</span>
                    ) : null}
                  </div>
                  <p className="pricing-card-description">{service.description}</p>
                  <p className="pricing-card-price">{service.price}</p>
                  <div className="pricing-card-actions">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="btn btn-primary"
                    >
                      Get Quote
                    </Link>
                    <a
                      href={getWhatsAppLink(company.whatsappPlaceholder)}
                      className="btn btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="pricing-empty-state pricing-card-empty">
                No services match your search. Try a different keyword or filter.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section pricing-hero-section">
        <div className="container pricing-hero-grid">
          <div className="section-head pricing-hero-copy">
            <p className="eyebrow">Pricing</p>
            <h1 className="pricing-title-highlight">Our Services & Pricing</h1>
            <p>
              Transparent pricing for business registration, taxation, compliance,
              accounting, and certification services.
            </p>
            <div className="pricing-hero-actions">
              <a href={getPhoneLink(company.phonePlaceholder)} className="btn btn-primary">
                Call Now
              </a>
              <a
                href={getWhatsAppLink(company.whatsappPlaceholder)}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a href={`mailto:${company.emailPlaceholder}`} className="btn btn-light">
                Email Us
              </a>
            </div>
          </div>

          <aside className="pricing-summary-card info-card">
            <h2>Quick Contact</h2>
            <dl>
              <div>
                <dt>Primary Phone</dt>
                <dd>{company.phonePlaceholder}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{company.emailPlaceholder}</dd>
              </div>
            </dl>
            <button type="button" className="btn btn-outline pricing-pdf-button" onClick={downloadPdf}>
              Download Full Price List (PDF)
            </button>
          </aside>
        </div>
      </section>

      <a
        href={getWhatsAppLink(company.whatsappPlaceholder)}
        className="floating-whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Need assistance? Chat with us now.
      </a>
    </>
  );
}
