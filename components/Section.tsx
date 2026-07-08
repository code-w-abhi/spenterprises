type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-8 border-t border-hairline px-6 py-24 sm:px-8 lg:px-12 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-brown-muted">
            {eyebrow}
          </p>
          <div className="mb-6 flex w-28 items-center gap-3">
            <span className="h-px flex-1 bg-hairline" />
            <span className="h-1.5 w-1.5 rotate-45 border border-brown/50" />
            <span className="h-px flex-1 bg-hairline" />
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-brown sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
