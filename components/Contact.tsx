"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "lucrative.spe@gmail.com";
const CONTACT_PHONE = "+91-70095 21005";
const INSTAGRAM = "@spenterprises2002";
const ADDRESS =
  "B-32/2, Banda Bahadur Nagar, Street No 8, Bahadurke Road, Ludhiana 141008";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.125 1.125 0 0 0-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3.75h10A3.25 3.25 0 0 1 20.25 7v10A3.25 3.25 0 0 1 17 20.25H7A3.25 3.25 0 0 1 3.75 17V7A3.25 3.25 0 0 1 7 3.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16.1a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z"
      />
      <circle cx="17.1" cy="6.9" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

const fieldClass =
  "w-full border-b border-white/20 bg-transparent py-2.5 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-gold";

const labelClass =
  "font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white/50";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct of Interest: ${product}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-8 overflow-hidden bg-[#3d2b1f] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-[-4%] top-1/2 hidden -translate-y-1/2 select-none font-serif text-[18rem] italic leading-none text-white/[0.04] lg:block xl:text-[22rem]"
      >
        SPE
      </p>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="min-w-0 lg:pr-14 xl:pr-20">
          <Reveal>
            <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/45 sm:text-xs">
              Get in Touch
            </p>
          </Reveal>
          <Reveal
            delay={100}
            as="h2"
            className="mb-3 font-serif text-3xl font-medium italic tracking-tight text-white sm:text-5xl md:text-[3.25rem]"
          >
            Contact Us
          </Reveal>
          <Reveal
            delay={180}
            as="p"
            className="mb-8 max-w-md font-sans text-sm leading-relaxed text-white/45 sm:mb-10 sm:text-[15px]"
          >
            For inquiries regarding pricing and discounts — we respond within
            24 hours.
          </Reveal>

          <Reveal delay={260}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 sm:gap-7"
            >
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
                <label className="flex min-w-0 flex-col gap-2">
                  <span className={labelClass}>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                  />
                </label>
                <label className="flex min-w-0 flex-col gap-2">
                  <span className={labelClass}>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="flex min-w-0 flex-col gap-2">
                <span className={labelClass}>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 ..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={fieldClass}
                />
              </label>

              <label className="flex min-w-0 flex-col gap-2">
                <span className={labelClass}>Product of Interest</span>
                <input
                  type="text"
                  name="product"
                  placeholder="e.g. Woven Labels, Foiling Tags..."
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className={fieldClass}
                />
              </label>

              <label className="flex min-w-0 flex-col gap-2">
                <span className={labelClass}>Message</span>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${fieldClass} resize-none`}
                />
              </label>

              <button
                type="submit"
                className="mt-1 w-full bg-gold px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-90 sm:mt-2 sm:w-auto sm:self-start"
              >
                Send Inquiry
              </button>

              {sent && (
                <p className="break-words font-sans text-xs text-white/50">
                  Your email client should open shortly. If it does not, write
                  to{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <div className="relative flex min-w-0 flex-col justify-center border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0 xl:pl-20">
          <Reveal delay={180} className="mb-8 sm:mb-10">
            <p className="font-serif text-4xl tracking-wide text-white/90 sm:text-6xl">
              SPE
            </p>
            <p className="mt-1 font-serif text-lg italic text-white sm:text-2xl">
              S.P. Enterprises
            </p>
            <p className="mt-3 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-gold sm:text-[11px] sm:tracking-[0.28em]">
              Ludhiana, Punjab, India
            </p>
          </Reveal>

          <ul className="space-y-5 font-sans text-sm text-white/75 sm:text-[15px]">
            <Reveal as="li" delay={280}>
              <a
                href={`tel:${CONTACT_PHONE.replace(/[\s-]/g, "")}`}
                className="inline-flex max-w-full items-start gap-3 transition-opacity hover:opacity-80"
              >
                <PhoneIcon />
                <span className="break-words">{CONTACT_PHONE}</span>
              </a>
            </Reveal>
            <Reveal as="li" delay={340}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex max-w-full items-start gap-3 transition-opacity hover:opacity-80"
              >
                <MailIcon />
                <span className="break-all">{CONTACT_EMAIL}</span>
              </a>
            </Reveal>
            <Reveal as="li" delay={400}>
              <a
                href="https://instagram.com/spenterprises2002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex max-w-full items-start gap-3 transition-opacity hover:opacity-80"
              >
                <InstagramIcon />
                <span className="break-words">{INSTAGRAM}</span>
              </a>
            </Reveal>
            <Reveal
              as="li"
              delay={460}
              className="inline-flex max-w-full items-start gap-3"
            >
              <LocationIcon />
              <span className="max-w-xs break-words leading-relaxed">
                {ADDRESS}
              </span>
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  );
}
