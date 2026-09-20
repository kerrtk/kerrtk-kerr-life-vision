import Link from "next/link";
import { site, brands, social } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>Kerr Life Vision</h4>
            <p className="blurb">
              The personal hub of {site.person}. Faith, family, dignity, and
              purpose, and the work that came out of them.
            </p>
          </div>
          <div>
            <h4>The Work</h4>
            <ul>
              {brands.map((b) => (
                <li key={b.slug}>
                  <Link href={`/${b.slug}`}>{b.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>This Site</h4>
            <ul>
              <li>
                <Link href="/story">Story</Link>
              </li>
              <li>
                <Link href="/dawson">For Dawson</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>
            &copy; {new Date().getFullYear()} {site.person}
          </span>
          <span className="footer-social">
            {social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
