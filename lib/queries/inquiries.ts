import { getSql, type InquiryRow, type InquiryStatus } from "@/lib/db";

export type InquiryInput = {
  name: string;
  email: string;
  phone?: string;
  product_interest?: string;
  message: string;
};

export async function createInquiry(input: InquiryInput) {
  const sql = getSql();
  const rows = (await sql`
    INSERT INTO inquiries (name, email, phone, product_interest, message, status)
    VALUES (
      ${input.name},
      ${input.email},
      ${input.phone ?? ""},
      ${input.product_interest ?? ""},
      ${input.message},
      'new'
    )
    RETURNING *
  `) as InquiryRow[];
  return rows[0];
}

export async function listInquiries(status?: InquiryStatus | "all") {
  const sql = getSql();
  if (!status || status === "all") {
    return (await sql`
      SELECT * FROM inquiries
      ORDER BY created_at DESC
    `) as InquiryRow[];
  }
  return (await sql`
    SELECT * FROM inquiries
    WHERE status = ${status}
    ORDER BY created_at DESC
  `) as InquiryRow[];
}

export async function updateInquiryStatus(id: string, status: InquiryStatus) {
  const sql = getSql();
  const rows = (await sql`
    UPDATE inquiries SET status = ${status}
    WHERE id = ${id}
    RETURNING *
  `) as InquiryRow[];
  return rows[0] ?? null;
}

export async function deleteInquiry(id: string) {
  const sql = getSql();
  await sql`DELETE FROM inquiries WHERE id = ${id}`;
}

export async function countNewInquiries() {
  const sql = getSql();
  const rows = (await sql`
    SELECT COUNT(*)::int AS count FROM inquiries WHERE status = 'new'
  `) as { count: number }[];
  return rows[0]?.count ?? 0;
}

export async function countInquiries() {
  const sql = getSql();
  const rows = (await sql`SELECT COUNT(*)::int AS count FROM inquiries`) as {
    count: number;
  }[];
  return rows[0]?.count ?? 0;
}
