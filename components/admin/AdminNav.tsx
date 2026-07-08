"use client";

import Link from "next/link";
import { logoutAction } from "@/app/actions/admin";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/inquiries", label: "Inquiries" },
];

export default function AdminNav() {
  return (
    <header className="border-b border-hairline bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-brown-muted">
            S.P. Enterprises CRM
          </p>
          <Link href="/admin" className="font-serif text-xl text-brown">
            Admin
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-3 sm:gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-brown transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="font-sans text-[11px] uppercase tracking-[0.16em] text-brown-muted hover:opacity-70"
          >
            View site
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="border border-brown px-3 py-1.5 font-sans text-[11px] uppercase tracking-[0.16em] text-brown"
            >
              Log out
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
