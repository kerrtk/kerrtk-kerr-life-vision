import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brands, books, images } from "@/lib/content";
import Rich from "@/components/Rich";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return {};
  return { title: brand.name, description: brand.blurb };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow eyebrow-wheat">{brand.role}</p>
          <h1>{brand.name}</h1>
        </div>
      </section>
      <section className="page-body">
        <div className="wrap">
          {slug === "books" && (
            <div className="covers">
              {books.map((b) => (
                <a
                  key={b.title}
                  href={b.href}
                  className="cover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={b.cover} alt={`${b.title} cover`} />
                  <span className="cover-title">{b.title}</span>
                  <span className="cover-note">{b.note}</span>
                </a>
              ))}
            </div>
          )}
          {slug === "aging-with-honor" && (
            <img src={images.awhSeal} alt="Aging With Honor seal" className="page-seal" />
          )}
          <div className="prose">
            {brand.body.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
            <a
              className="outlink"
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {brand.hrefLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
