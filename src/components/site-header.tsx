"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navLinks } from "@/lib/site-data";

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

        <Link href="/contact" className="header-cta">
          Request Consultation
        </Link>
      </div>
    </header>
  );
}