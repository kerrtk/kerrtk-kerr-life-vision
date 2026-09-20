import Link from "next/link";
import { nav } from "@/lib/content";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="wordmark">
          Kerr Life Vision<span>.</span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {nav
            .filter((n) => n.href !== "/")
            .map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
