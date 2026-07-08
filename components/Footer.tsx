export default function Footer() {
  return (
    <footer className="bg-[#3d2b1f] px-4 pb-8 pt-2 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
        <p className="font-sans text-[9px] uppercase leading-relaxed tracking-[0.14em] text-white/40 sm:text-[10px] sm:tracking-[0.18em]">
          © 2024 S.P. Enterprises · All Rights Reserved
        </p>
        <a
          href="https://instagram.com/spenterprises2002"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[9px] uppercase leading-relaxed tracking-[0.14em] text-white/40 transition-opacity hover:opacity-70 sm:text-[10px] sm:tracking-[0.18em]"
        >
          Connect with Us · @spenterprises2002
        </a>
      </div>
    </footer>
  );
}
