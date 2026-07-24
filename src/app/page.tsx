import type { Metadata } from "next";
import Link from "next/link";
import { company, keyServices, whyChooseUs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home | Maa Jagdamba Solution Private Limited",
  description:
    "Trusted financial, taxation and business advisory services including GST filing, accounting, ROC filing and company registration in Ranchi.",
};

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Maa Jagdamba Solution Private Limited</p>
            <h1>Trusted Financial, Taxation & Business Advisory Services</h1>
            <p className="hero-subtitle">
              Helping individuals and businesses with accounting, GST, income
              tax, ROC filing, audit, company registration, and financial
              advisory services.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Get Consultation
              </Link>
              <Link href="/services" className="btn btn-outline">
                Explore Services
              </Link>
              <Link href="/contact" className="btn btn-light">
                Request Consultation
              </Link>
            </div>
          </div>
          <aside className="hero-panel">
            <h2>Company Snapshot</h2>
            <ul>
              <li>Incorporated on 03 February 2026</li>
              <li>Private Limited Company</li>
              <li>Registered in Ranchi, Jharkhand</li>
              <li>ROC: ROC Ranchi</li>
              <li>CIN: {company.cin}</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Key Services</p>
            <h2>Professional Service Areas</h2>
          </div>
          <div className="card-grid services-grid">
            {keyServices.map((service) => (
              <article key={service} className="service-card" tabIndex={0}>
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-about">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">About The Company</p>
            <h2>Reliable Support for Finance, Tax and Compliance Needs</h2>
            <p>
              Maa Jagdamba Solution Private Limited is a Ranchi-based private
              limited company providing financial, accounting, taxation,
              compliance, and business advisory services.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why Choose Us</p>
            <h2>Your Trusted Local Advisory Partner</h2>
          </div>
          <ul className="check-list">
            {whyChooseUs.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-block">
        <div className="container cta-inner">
          <h2>
            Need help with GST, accounting, tax filing, or company registration?
          </h2>
          <p>Contact Maa Jagdamba Solution Private Limited today.</p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
