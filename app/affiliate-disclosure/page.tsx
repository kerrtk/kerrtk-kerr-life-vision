import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { affiliate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Where Todd Kerr has a financial interest in what this site points to.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliatePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Affiliate Disclosure"
      intro={affiliate.intro}
      sections={affiliate.sections}
    />
  );
}
