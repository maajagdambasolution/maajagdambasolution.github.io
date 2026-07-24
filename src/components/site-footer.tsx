import Link from "next/link";
import { company, keyServices } from "@/lib/site-data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container footer-grid">
        <section className="footer-brand-block">
          <p className="footer-kicker">Maa Jagdamba Solution</p>
          <h2>{company.name}</h2>
          <p>{company.shortDescription}</p>
          <p className="footer-meta">CIN: {company.cin}</p>
          <p className="footer-meta">ROC: {company.roc}</p>
        </section>

        <section className="footer-link-block">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-link-block">
          <h3>Popular Services</h3>
          <ul>
            {keyServices.slice(0, 6).map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="footer-contact-block">
          <h3>Contact Details</h3>
          <address className="footer-address">
            {company.addressLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < company.addressLines.length - 1 ? "," : ""}
              </span>
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
            className="justdial-link footer-link"
          >
            View Justdial Profile
          </a>
        </section>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-bottom-text">
            {company.name} - Financial, accounting, taxation, compliance, and
            business advisory services in Ranchi, Jharkhand.
          </p>
          <p className="copyright-line">© 2026 {company.name}</p>
        </div>
      </div>
    </footer>
  );
}