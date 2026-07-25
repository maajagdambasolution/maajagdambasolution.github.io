import type { Metadata } from "next";
import Link from "next/link";
import { keyServices, whyChooseUs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home | Maa Jagdamba Solution Pvt. Ltd.",
  description:
    "Trusted financial, taxation and business advisory services including GST filing, accounting, ROC filing and company registration in Ranchi.",
};

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid hero-grid-single">
          <div>
            <p className="eyebrow">Maa Jagdamba Solution Pvt. Ltd.</p>
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
          <p>Contact Maa Jagdamba Solution Pvt. Ltd. today.</p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
