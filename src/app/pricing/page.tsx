import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing-page";

export const metadata: Metadata = {
  title: "Pricing | Maa Jagdamba Solution Pvt. Ltd.",
  description:
    "View pricing for GST registration, company registration, income tax filing, ROC compliance, accounting, MSME registration, DSC and other professional services offered by Maa Jagdamba Solution Pvt. Ltd.",
};

export default function PricingRoute() {
  return <PricingPage />;
}
