import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow eyebrow-wheat">404</p>
          <h1>That page isn&rsquo;t here</h1>
        </div>
      </section>
      <section className="page-body">
        <div className="wrap">
          <div className="prose">
            <p>The link may be old, or I may have moved something.</p>
            <Link href="/" className="outlink">
              Back to the start
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
