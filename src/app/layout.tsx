import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jagdambasolutions.github.io"),
  title:
    "Maa Jagdamba Solution Private Limited | Accounting, GST, Tax & Business Advisory Services in Ranchi",
  description:
    "Maa Jagdamba Solution Private Limited provides accounting, GST filing, GST return, income tax, TDS, ROC filing, company registration, audit, and business advisory services in Ranchi, Jharkhand.",
  keywords: [
    "Accounting services in Ranchi",
    "GST filing in Ranchi",
    "GST return services Ranchi",
    "Company registration in Ranchi",
    "Income tax consultant Ranchi",
    "TDS return filing Ranchi",
    "ROC filing services Ranchi",
    "Business advisory services Ranchi",
    "Bookkeeping services Ranchi",
    "Internal audit services Ranchi",
    "Financial consultant Ranchi",
    "Maa Jagdamba Solution Private Limited",
  ],
  openGraph: {
    title:
      "Maa Jagdamba Solution Private Limited | Accounting, GST, Tax & Business Advisory Services in Ranchi",
    description:
      "Financial, accounting, taxation, compliance, and business advisory services in Ranchi, Jharkhand.",
    url: "https://jagdambasolutions.github.io",
    siteName: "Maa Jagdamba Solution Private Limited",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${lora.variable}`}>
      <body>
        <SiteHeader />
        <main className="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
