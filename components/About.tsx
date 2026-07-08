"use client";

import Reveal from "./Reveal";

const stats = [
  {
    value: "2002",
    label: "Year Established",
    detail: "Over two decades of craft",
  },
  {
    value: "500+",
    label: "Brand Partners",
    detail: "Across India and beyond",
  },
  {
    value: "20+",
    label: "Product Categories",
    detail: "Complete branding ecosystem",
  },
  {
    value: "∞",
    label: "Custom Options",
    detail: "Your vision, our craft",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-8 overflow-hidden border-t border-hairline px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="max-w-xl">
          <Reveal>
            <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-brown-muted sm:text-xs">
              Our Story
            </p>
          </Reveal>
          <Reveal delay={100} as="h2" className="mb-6 font-serif text-[1.75rem] font-medium leading-[1.15] tracking-tight text-brown sm:text-4xl md:text-[2.75rem]">
            The Finishing Touch Behind Every Great Brand
          </Reveal>
          <Reveal delay={180}>
            <span className="mb-7 block h-px w-12 origin-left bg-gold sm:mb-8" />
          </Reveal>
          <Reveal delay={220} className="space-y-5 font-sans text-[15px] leading-relaxed text-brown/75 sm:text-base">
            <p>
              Founded in 2002 in Ludhiana — India&apos;s garment capital —{" "}
              <em className="italic text-brown">S.P. Enterprises</em> has spent
              over two decades perfecting the art of branding solutions. We
              work with fashion labels, textile manufacturers, and boutique
              brands who understand that the details matter.
            </p>
            <p>
              From the first woven thread to the final foil stamp, every
              product that leaves our facility carries the weight of genuine
              craftsmanship. We believe that effective packaging truly
              signifies the quality of the product within.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-70 sm:mt-10 sm:text-xs"
            >
              Start a Conversation
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-2 overflow-hidden">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-2 select-none text-center font-serif text-[4.5rem] italic leading-none text-watermark sm:bottom-6 sm:text-[9rem] lg:bottom-10 lg:text-[10rem]"
          >
            Craft
          </p>

          {stats.map((stat, index) => {
            const isRight = index % 2 === 1;
            const isBottom = index >= 2;

            return (
              <Reveal
                key={stat.label}
                delay={150 + index * 100}
                className={`relative flex min-w-0 flex-col justify-center px-3 py-6 sm:px-8 sm:py-10 ${
                  isRight ? "border-l border-hairline" : ""
                } ${isBottom ? "border-t border-hairline" : ""}`}
              >
                <p className="mb-2 font-serif text-3xl leading-none text-gold sm:text-5xl md:text-[3.25rem]">
                  {stat.value}
                </p>
                <p className="mb-1 font-sans text-[9px] font-medium uppercase leading-snug tracking-[0.14em] text-brown sm:text-[11px] sm:tracking-[0.2em]">
                  {stat.label}
                </p>
                <p className="font-sans text-[11px] leading-snug text-brown-muted sm:text-sm">
                  {stat.detail}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
