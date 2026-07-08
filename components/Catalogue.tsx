"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const categories = [
  "All",
  "Hang Tags",
  "Woven Labels",
  "Printed Labels",
  "Heat Transfer",
  "Stickers",
  "Printables",
  "Other",
] as const;

type Category = (typeof categories)[number];

type CatalogueItem = {
  id: string;
  category: Exclude<Category, "All">;
  meta: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const items: CatalogueItem[] = [
  {
    id: "daily-hang-tags",
    category: "Hang Tags",
    meta: "Budget Friendly · Regular Use",
    title: "Daily Use Hang Tags",
    description:
      "Crisp, clean tags perfect for everyday garment branding. Budget-friendly without compromising on finish.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Production machinery creating hang tags",
  },
  {
    id: "multi-piece-sets",
    category: "Hang Tags",
    meta: "2pc Set · Premium Pairing",
    title: "Multi Piece Sets",
    description:
      "Two-piece or more coordinated sets for a layered brand story.",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Red and black gift bags arranged together",
  },
  {
    id: "special-effects-tags",
    category: "Hang Tags",
    meta: "Velvet Touch · Grainy Texture · UV Finish",
    title: "Special Effects Tags",
    description:
      "Elevate your product packaging with velvet-soft, grainy, or gloss UV finishes that demand attention.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Organized warehouse with yellow shelving",
  },
  {
    id: "woven-main",
    category: "Woven Labels",
    meta: "Damask · Soft Edge",
    title: "Classic Woven Labels",
    description:
      "Fine-detail woven labels with clean edges for enduring brand identity inside every garment.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Stacked garments with woven care labels",
  },
  {
    id: "printed-care",
    category: "Printed Labels",
    meta: "Care Labels · High Clarity",
    title: "Printed Care Labels",
    description:
      "Sharp printed care and content labels that stay readable wash after wash.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Retail garments displayed in a store",
  },
  {
    id: "heat-transfer",
    category: "Heat Transfer",
    meta: "Soft Hand · Durable Bond",
    title: "Heat Transfer Marks",
    description:
      "Seamless heat transfer branding with a soft hand feel for modern apparel lines.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Textiles arranged for finishing work",
  },
  {
    id: "sticker-pack",
    category: "Stickers",
    meta: "Die-Cut · Brand Kits",
    title: "Custom Stickers",
    description:
      "Die-cut stickers and seal labels that finish packaging with a polished brand cue.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Flat lay of branded stickers and print",
  },
  {
    id: "printables",
    category: "Printables",
    meta: "Cards · Inserts · Wrappers",
    title: "Printable Collateral",
    description:
      "Hang cards, inserts, and wrappers printed to match your packaging story.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Printed paper collateral on a desk",
  },
  {
    id: "other-packaging",
    category: "Other",
    meta: "Custom · Made to Spec",
    title: "Specialty Packaging",
    description:
      "Bespoke packaging and branding pieces developed around your product and process.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Packaged products ready for retail",
  },
];

export default function Catalogue() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.category === active);
  }, [active]);

  return (
    <section
      id="catalogue"
      className="relative scroll-mt-8 border-t border-hairline px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-brown-muted sm:text-xs">
            The Collection
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-brown sm:text-5xl md:text-6xl">
            Full Catalogue
          </h2>
        </div>

        <div className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:mb-14 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`shrink-0 border px-3.5 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] transition-colors sm:px-4 sm:text-xs sm:tracking-[0.18em] ${
                  isActive
                    ? "border-brown bg-brown text-cream"
                    : "border-brown/40 bg-transparent text-brown hover:border-brown"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {filtered.map((item) => (
            <article key={item.id} className="group flex min-w-0 flex-col">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-brown/5">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mb-2 font-sans text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-brown-muted sm:text-[11px] sm:tracking-[0.2em]">
                {item.meta}
              </p>
              <h3 className="mb-3 font-serif text-xl font-medium text-brown sm:text-[1.65rem]">
                {item.title}
              </h3>
              <p className="mb-5 flex-1 font-sans text-sm leading-relaxed text-brown-muted sm:text-[15px]">
                {item.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-brown transition-opacity hover:opacity-70 sm:text-xs"
              >
                Quick Inquiry
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center font-sans text-sm text-brown-muted">
            No items in this category yet.{" "}
            <a href="#contact" className="underline underline-offset-2">
              Inquire for custom options
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
