import { legalUpdated, type LegalSection } from "@/lib/content";

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow eyebrow-wheat">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
      </section>
      <section className="page-body">
        <div className="wrap">
          <div className="prose legal">
            <p>{intro}</p>
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
            <p className="legal-date">Last updated {legalUpdated}</p>
          </div>
        </div>
      </section>
    </>
  );
}
