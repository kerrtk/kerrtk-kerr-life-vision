import Link from "next/link";
import { hero, anchors, intro, brands, dawson } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="lede">{hero.lede}</p>
          <p className="sub">{hero.sub}</p>
          <ul className="anchors">
            {anchors.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow eyebrow-wheat">Why any of this exists</p>
          </div>
          <div className="prose">
            {intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              <Link href="/story" className="outlink">
                Read the longer version
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow eyebrow-wheat">The work</p>
            <h2>Four things, one reason</h2>
          </div>
          <div className="cards">
            {brands.map((b) => (
              <Link key={b.slug} href={`/${b.slug}`} className="card">
                <p className="eyebrow">{b.role}</p>
                <h3>{b.name}</h3>
                <p>{b.blurb}</p>
                <span className="go">More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prose">
            <p className="eyebrow eyebrow-wheat">In memory</p>
            <p style={{ marginTop: "1rem" }}>{dawson.line}</p>
            <Link href="/dawson" className="outlink">
              For {dawson.short}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
