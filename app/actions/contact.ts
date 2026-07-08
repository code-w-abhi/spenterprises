"use server";

import { createInquiry } from "@/lib/queries/inquiries";

export type ContactState = {
  ok: boolean;
  error?: string;
};

export async function submitInquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const product_interest = String(formData.get("product") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Name, email, and message are required." };
  }

  try {
    await createInquiry({
      name,
      email,
      phone,
      product_interest,
      message,
    });
    return { ok: true };
  } catch (error) {
    console.error("Failed to save inquiry", error);
    return {
      ok: false,
      error: "Could not send inquiry. Please try again or email us directly.",
    };
  }
}
