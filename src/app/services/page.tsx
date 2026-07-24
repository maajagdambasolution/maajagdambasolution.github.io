import type { Metadata } from "next";
import { serviceGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | Maa Jagdamba Solution Private Limited",
  description:
    "Explore accounting, GST, income tax, ROC filing, compliance, audit, and business advisory services by Maa Jagdamba Solution Private Limited in Ranchi.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Services</p>
          <h1>Comprehensive Financial and Compliance Solutions</h1>
          <p>
            We provide structured services for individuals, startups, and
            businesses with a practical and transparent approach.
          </p>
        </div>

        <div className="card-grid service-group-grid">
          {serviceGroups.map((group) => (
            <article key={group.title} className="info-card">
              <h2>{group.title}</h2>
              <ul className="service-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}