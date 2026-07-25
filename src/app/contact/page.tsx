import type { Metadata } from "next";
import Link from "next/link";
import { company, pricingServices } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Maa Jagdamba Solution Private Limited",
  description:
    "Contact Maa Jagdamba Solution Private Limited for GST, accounting, taxation, ROC filing, audit and business advisory services in Ranchi.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { service?: string };
}) {
  const selectedService = searchParams?.service ? searchParams.service : "";
  const selectedMessage = selectedService
    ? `I would like a quote for ${selectedService}.`
    : "";

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Contact Us</p>
          <h1>Send Your Enquiry</h1>
          <p>
            Connect with us for accounting, GST, tax filing, ROC compliance,
            audit, or business advisory support.
          </p>
        </div>

        <div className="contact-grid">
          <article className="info-card">
            <h2>Office Address</h2>
            <address>
              <strong>{company.name}</strong>
              {company.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>

            <p>
              <strong>Phone:</strong> {company.phonePlaceholder}
            </p>
            <p>
              <strong>Email:</strong> {company.emailPlaceholder}
            </p>
            <p>
              <strong>WhatsApp:</strong> {company.whatsappPlaceholder}
            </p>

            <a
              href={company.justdial}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Visit Justdial Profile
            </a>
          </article>

          <article className="info-card">
            <h2>Contact Form</h2>
            <form className="contact-form">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" type="text" required />

              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                required
              />

              <label htmlFor="emailAddress">Email Address</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                required
              />

              <label htmlFor="serviceRequired">Service Required</label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                defaultValue={selectedService}
                required
              >
                <option value="">Select a service</option>
                {pricingServices.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                defaultValue={selectedMessage}
                required
              />

              <button type="submit" className="btn btn-primary">
                Submit Enquiry
              </button>
            </form>

            {selectedService ? (
              <p className="contact-prefill-note">
                Service pre-selected from the pricing page. Need a different
                option? <Link href="/pricing">Review pricing</Link>.
              </p>
            ) : null}
          </article>
        </div>

        <section className="map-section">
          <h2>Find Us on Map</h2>
          <div className="map-wrapper">
            <iframe
              title="Maa Jagdamba Solution Private Limited Location"
              src="https://maps.google.com/maps?q=Birsa%20Chowk%20Ranchi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </section>
  );
}