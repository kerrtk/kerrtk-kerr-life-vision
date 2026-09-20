import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.person}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow eyebrow-wheat">Contact</p>
          <h1>Say hello</h1>
        </div>
      </section>
      <section className="page-body">
        <div className="wrap">
          <div className="prose">
            <p>
              One address, and it reaches me. Whether it is about a website, a
              question about caregiving, the business, or one of the books,
              write and I will answer.
            </p>
            <p>
              I work a full route on weekdays, so a reply may take a day. It
              will come.
            </p>
            <p style={{ marginTop: "2rem" }}>
              <a className="contact-email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
