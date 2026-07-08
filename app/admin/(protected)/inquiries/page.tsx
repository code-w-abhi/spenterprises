import Link from "next/link";
import {
  deleteInquiryAction,
  updateInquiryStatusAction,
} from "@/app/actions/admin";
import { listInquiries } from "@/lib/queries/inquiries";
import type { InquiryStatus } from "@/lib/db";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ status?: string }>;
};

export default async function AdminInquiriesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const statusFilter =
    params.status === "new" ||
    params.status === "read" ||
    params.status === "archived"
      ? (params.status as InquiryStatus)
      : "all";

  const inquiries = await listInquiries(statusFilter).catch(() => []);

  const filters = ["all", "new", "read", "archived"] as const;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-brown">Inquiries</h1>
        <p className="font-sans text-sm text-brown-muted">
          Contact form submissions from the website.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((status) => (
          <Link
            key={status}
            href={
              status === "all"
                ? "/admin/inquiries"
                : `/admin/inquiries?status=${status}`
            }
            className={`border px-3 py-1.5 font-sans text-[11px] uppercase tracking-[0.16em] ${
              statusFilter === status
                ? "border-brown bg-brown text-cream"
                : "border-hairline text-brown"
            }`}
          >
            {status}
          </Link>
        ))}
      </div>

      <div className="space-y-4">
        {inquiries.map((inquiry) => (
          <article
            key={inquiry.id}
            className="border border-hairline p-5"
          >
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-serif text-xl text-brown">{inquiry.name}</h2>
                <p className="font-sans text-sm text-brown-muted">
                  {inquiry.email}
                  {inquiry.phone ? ` · ${inquiry.phone}` : ""}
                </p>
              </div>
              <div className="text-right">
                <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-gold">
                  {inquiry.status}
                </p>
                <p className="font-sans text-xs text-brown-muted">
                  {new Date(inquiry.created_at).toLocaleString()}
                </p>
              </div>
            </div>

            {inquiry.product_interest && (
              <p className="mb-2 font-sans text-sm text-brown">
                <span className="text-brown-muted">Product: </span>
                {inquiry.product_interest}
              </p>
            )}

            <p className="mb-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-brown/80">
              {inquiry.message}
            </p>

            <div className="flex flex-wrap gap-2">
              {(["new", "read", "archived"] as const).map((status) => (
                <form key={status} action={updateInquiryStatusAction}>
                  <input type="hidden" name="id" value={inquiry.id} />
                  <input type="hidden" name="status" value={status} />
                  <button
                    type="submit"
                    disabled={inquiry.status === status}
                    className="border border-hairline px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.14em] text-brown disabled:opacity-40"
                  >
                    Mark {status}
                  </button>
                </form>
              ))}
              <form action={deleteInquiryAction}>
                <input type="hidden" name="id" value={inquiry.id} />
                <button
                  type="submit"
                  className="border border-red-200 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.14em] text-red-700"
                >
                  Delete
                </button>
              </form>
            </div>
          </article>
        ))}

        {inquiries.length === 0 && (
          <p className="border border-hairline px-4 py-10 text-center font-sans text-sm text-brown-muted">
            No inquiries in this filter yet.
          </p>
        )}
      </div>
    </div>
  );
}
