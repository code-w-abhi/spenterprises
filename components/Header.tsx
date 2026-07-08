"use client";

import { useState } from "react";

const navLinks = [
  { href: "#catalogue", label: "Products" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 py-4 sm:px-8 sm:py-5 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <a
          href="#top"
          className="min-w-0 truncate font-sans text-lg font-medium tracking-wide text-brown transition-opacity hover:opacity-70 sm:text-xl md:text-2xl"
        >
          S.P. Enterprises
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-brown transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brown px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-cream transition-opacity hover:opacity-85"
          >
            Inquire
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 items-center justify-center lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-brown transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-brown transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-full bg-brown transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="mt-3 border border-hairline bg-cream/95 p-5 backdrop-blur-sm lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-brown"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-block bg-brown px-5 py-3 text-center font-sans text-xs font-medium uppercase tracking-[0.22em] text-cream"
            >
              Inquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
