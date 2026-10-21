import Link from "next/link";
import {
  hero,
  anchors,
  intro,
  brands,
  dawson,
  signup,
  images,
  books,
} from "@/lib/content";
import Signup from "@/components/Signup";

function CardVisual({ slug }: { slug: string }) {
  if (slug === "aging-with-honor") {
    return (
      <div className="card-visual visual-paper">
        <img src={images.awhSeal} alt="Aging With Honor seal" className="seal" />
      </div>
    );
  }
  if (slug === "books") {
    return (
      <div className="card-visual visual-ink">
        <div className="mini-covers">
          {books.map((b) => (
            <img key={b.title} src={b.cover} alt={b.title} />
          ))}
        </div>
      </div>
    );
  }
  if (slug === "kerr-systems") {
    return (
      <div className="card-visual visual-ink">
        <span className="visual-word">
          Kerr Systems<span>.</span>
        </span>
      </div>
    );
  }
  return (
    <div className="card-visual visual-wheat">
      <span className="visual-word">One bag, one child.</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero hero-ink">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>
              Find Peace. Build Purpose. <em>Live with Vision.</em>
            </h1>
            <p className="lede">{hero.lede}</p>
            <p className="sub">{hero.sub}</p>
            <ul className="anchors">
              {anchors.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link href="#legacy-blueprint" className="btn btn-wheat">
                Get the free journal
              </Link>
              <Link href="/story" className="btn btn-ghost">
                Read my story
              </Link>
            </div>
          </div>
          <figure className="hero-photo">
            <img src={images.hero} alt="" />
          </figure>
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

      <section className="section section-warm">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow eyebrow-wheat">The work</p>
            <h2>Four things, one reason</h2>
          </div>
          <div className="cards">
            {brands.map((b) => (
              <Link key={b.slug} href={`/${b.slug}`} className="card">
                <CardVisual slug={b.slug} />
                <div className="card-body">
                  <p className="eyebrow">{b.role}</p>
                  <h3>{b.name}</h3>
                  <p>{b.blurb}</p>
                  <span className="go">More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-wheat">
        <div className="wrap band-inner">
          <div>
            <p className="eyebrow">Free</p>
            <h2>The Question List</h2>
            <p>
              Twelve questions to ask before the next decision about a
              parent&apos;s care.
            </p>
          </div>
          <Link href="/question-list" className="btn btn-ink">
            Read the questions
          </Link>
        </div>
      </section>

      <section className="section" id="legacy-blueprint">
        <div className="wrap split">
          <div>
            <p className="eyebrow eyebrow-wheat">{signup.eyebrow}</p>
            <h2 style={{ marginTop: "0.75rem" }}>{signup.title}</h2>
            <div className="prose">
              <p>{signup.lede}</p>
            </div>
            <Signup />
          </div>
          <figure className="split-photo">
            <img src={images.legacy} alt="" />
          </figure>
        </div>
      </section>

      <section className="section section-ink">
        <div className="wrap memory">
          {dawson.photo && (
            <img src={images.dawson} alt={dawson.name} className="memory-photo" />
          )}
          <div>
            <p className="eyebrow">In memory</p>
            <p className="memory-line">{dawson.line}</p>
            <Link href="/dawson" className="outlink outlink-light">
              For {dawson.short}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
