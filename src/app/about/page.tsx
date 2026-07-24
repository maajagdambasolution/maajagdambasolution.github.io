import type { Metadata } from "next";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Maa Jagdamba Solution Private Limited",
  description:
    "Learn about Maa Jagdamba Solution Private Limited, a Ranchi-based private limited company offering accounting, taxation, compliance and advisory services.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">About Us</p>
          <h1>Maa Jagdamba Solution Private Limited</h1>
          <p>
            Maa Jagdamba Solution Private Limited is a Ranchi-based private
            limited company providing financial, accounting, taxation,
            compliance, and business advisory services. The company supports
            individuals, startups, small businesses, and organizations with
            reliable documentation, GST, income tax, ROC filing, bookkeeping,
            audit, and business consultation services.
          </p>
        </div>

        <div className="info-grid">
          <article className="info-card">
            <h2>Company Profile</h2>
            <dl>
              <div>
                <dt>Company Type</dt>
                <dd>{company.type}</dd>
              </div>
              <div>
                <dt>Incorporation Date</dt>
                <dd>{company.incorporationDate}</dd>
              </div>
              <div>
                <dt>Registered Location</dt>
                <dd>{company.location}</dd>
              </div>
              <div>
                <dt>ROC Registration</dt>
                <dd>{company.roc}</dd>
              </div>
              <div>
                <dt>CIN</dt>
                <dd>{company.cin}</dd>
              </div>
            </dl>
          </article>

          <article className="info-card">
            <h2>Capital Details</h2>
            <dl>
              <div>
                <dt>Authorized Share Capital</dt>
                <dd>{company.authorizedShareCapital}</dd>
              </div>
              <div>
                <dt>Paid-up Share Capital</dt>
                <dd>{company.paidUpShareCapital}</dd>
              </div>
            </dl>

            <h3>Our Business Focus</h3>
            <p>
              We focus on dependable support for accounting, GST, income tax,
              ROC compliance, audits, registrations, and practical business
              advisory for sustained growth.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}