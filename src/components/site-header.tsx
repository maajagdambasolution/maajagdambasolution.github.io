"use client";

import Link from "next/link";
import { TopNumbersTicker } from "@/components/top-numbers-ticker";
import { TopServicesTicker } from "@/components/top-services-ticker";
import { usePathname } from "next/navigation";
import { company, keyServices, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={company.name}>
          <span className="brand-top">Maa Jagdamba Solution Private Limited</span>
          <span className="brand-bottom">Financial, Taxation & Advisory Services</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isHome = link.href === "/";
              const isActive = isHome
                ? pathname === "/"
                : pathname.startsWith(link.href);

              return (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className={isActive ? "nav-link active" : "nav-link"}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="top-services-bar" aria-label="Top key services">
        <div className="container top-services-wrap">
          <div className="top-inline-group">
            <p className="top-services-title">Key Service:</p>
            <TopServicesTicker services={keyServices} />
          </div>
          <div className="top-inline-group">
            <p className="top-call-title">Call Us On:</p>
            <TopNumbersTicker numbers={["999999999"]} prefix="+91 " />
          </div>
          <div className="top-inline-group">
            <p className="top-email-title">Email ID:</p>
            <a href={`mailto:${company.emailPlaceholder}`} className="top-email-chip">
              <span className="top-email-text">{company.emailPlaceholder}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}