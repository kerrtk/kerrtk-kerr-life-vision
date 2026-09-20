import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brands } from "@/lib/content";
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
