export default function VerticalRail() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-5 z-20 hidden items-center lg:left-8 lg:flex xl:left-10"
    >
      <div className="animate-fade-in delay-4 flex h-[42vh] min-h-48 flex-col items-center justify-between">
        <span className="h-16 w-px bg-hairline" />
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-brown-muted [writing-mode:vertical-rl] rotate-180">
          Branding Solutions
        </p>
        <span className="h-16 w-px bg-hairline" />
      </div>
    </div>
  );
}
