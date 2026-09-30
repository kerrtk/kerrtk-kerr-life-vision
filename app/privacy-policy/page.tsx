import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What this site collects, and what it does not.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={privacy.intro}
      sections={privacy.sections}
    />
  );
}
