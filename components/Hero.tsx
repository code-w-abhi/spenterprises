import VerticalRail from "./VerticalRail";

const TITLE = "S.P. Enterprises";

function AnimatedTitle() {
  return (
    <h1
      aria-label={TITLE}
      className="relative max-w-full px-1 font-serif text-[clamp(2.25rem,10vw,6.5rem)] font-medium italic leading-[1.05] tracking-tight text-brown"
    >
      {TITLE.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          aria-hidden="true"
          className="animate-letter"
          style={{ animationDelay: `${0.35 + i * 0.045}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pb-20 sm:pt-24"
    >
      <VerticalRail />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="animate-fade-up mb-5 flex flex-col items-center gap-3 sm:mb-8 sm:gap-4">
          <p className="animate-text-rise max-w-[17rem] font-sans text-[10px] font-medium uppercase leading-relaxed tracking-[0.22em] text-brown-muted sm:max-w-none sm:text-xs sm:tracking-[0.32em]">
            Providing Branding Solutions Since 2002
          </p>
          <div className="flex w-28 items-center gap-3 sm:w-56">
            <span className="animate-line-expand delay-1 h-px flex-1 bg-hairline" />
            <span className="animate-soft-pulse h-1.5 w-1.5 rotate-45 border border-brown/50 bg-transparent" />
            <span className="animate-line-expand delay-1 h-px flex-1 bg-hairline" />
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center overflow-hidden py-2 sm:overflow-visible sm:py-4">
          <p
            aria-hidden="true"
            className="animate-watermark pointer-events-none absolute left-1/2 top-1/2 select-none whitespace-nowrap font-serif text-[clamp(3.5rem,22vw,13rem)] font-normal italic leading-none text-watermark"
          >
            EST. 2002
          </p>
          <AnimatedTitle />
        </div>

        <p className="animate-text-rise delay-3 mt-4 max-w-sm px-2 font-serif text-base italic leading-relaxed text-brown/80 sm:mt-5 sm:max-w-2xl sm:text-xl md:text-2xl">
          Effective Packaging Signifies Quality Products
        </p>

        <div className="animate-fade-up delay-4 mt-8 flex w-full max-w-[16rem] flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <a
            href="#catalogue"
            className="bg-brown px-6 py-3.5 text-center font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-85 sm:min-w-[12.5rem] sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.22em]"
          >
            View Catalogue
          </a>
          <a
            href="#contact"
            className="border border-brown px-6 py-3.5 text-center font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-brown transition-colors hover:bg-brown hover:text-cream sm:min-w-[12.5rem] sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.22em]"
          >
            Request Pricing
          </a>
        </div>
      </div>

      <a
        href="#catalogue"
        className="animate-float absolute bottom-5 left-1/2 z-10 -translate-x-1/2 font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-brown-muted transition-opacity hover:opacity-70 sm:bottom-8 sm:text-xs"
      >
        Scroll
      </a>
    </section>
  );
}
