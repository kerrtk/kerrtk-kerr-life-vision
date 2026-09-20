import Link from "next/link";
import type { Metadata } from "next";
import { story, dawson } from "@/lib/content";

export const metadata: Metadata = {
  title: "Story",
  description:
    "Three years on a route through central Iowa nursing homes, and what it started.",
};

export default function StoryPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow eyebrow-wheat">Story</p>
          <h1>{story.title}</h1>
        </div>
      </section>
      <section className="page-body">
        <div className="wrap">
          <div className="prose">
            {story.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>{dawson.line}</p>
            <Link href="/dawson" className="outlink">
              For {dawson.short}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
