import type { Metadata } from "next";
import { dawson } from "@/lib/content";

export const metadata: Metadata = {
  title: `For ${dawson.short}`,
  description: `In memory of ${dawson.name}.`,
  robots: { index: false, follow: true },
};

export default function DawsonPage() {
  return (
    <section className="memorial">
      <div className="memorial-inner">
        {dawson.photo && (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dawson.jpg" alt={dawson.name} width={900} height={1125} />
          </figure>
        )}
        <h1>{dawson.name}</h1>
        <hr className="rule" />
        {dawson.words.length > 0 && (
          <div className="words">
            {dawson.words.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
