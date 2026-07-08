"use server";

import { redirect } from "next/navigation";
import {
  clearAdminSession,
  setAdminSession,
  verifyAdminPassword,
} from "@/lib/auth";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/lib/queries/categories";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/lib/queries/products";
import {
  deleteInquiry,
  updateInquiryStatus,
} from "@/lib/queries/inquiries";
import { slugify, toBool, toInt } from "@/lib/utils";
import type { InquiryStatus } from "@/lib/db";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  if (!verifyAdminPassword(password)) {
    redirect(`/admin/login?error=1&next=${encodeURIComponent(next)}`);
  }

  await setAdminSession();
  redirect(next.startsWith("/admin") ? next : "/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function upsertCategoryAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const slug = slugify(slugInput || title);

  const input = {
    title,
    slug,
    variants_label: String(formData.get("variants_label") ?? "").trim(),
    features: String(formData.get("features") ?? "").trim(),
    image_url: String(formData.get("image_url") ?? "").trim(),
    image_alt: String(formData.get("image_alt") ?? "").trim(),
    sort_order: toInt(formData.get("sort_order"), 0),
    is_published: toBool(formData.get("is_published")),
  };

  if (!input.title || !input.slug) {
    redirect("/admin/categories?error=missing");
  }

  if (id) {
    await updateCategory(id, input);
  } else {
    await createCategory(input);
  }

  redirect("/admin/categories");
}

export async function deleteCategoryAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (id) await deleteCategory(id);
  redirect("/admin/categories");
}

export async function upsertProductAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const slug = slugify(slugInput || title);
  const category_id = String(formData.get("category_id") ?? "");

  const input = {
    category_id,
    title,
    slug,
    meta: String(formData.get("meta") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    image_url: String(formData.get("image_url") ?? "").trim(),
    image_alt: String(formData.get("image_alt") ?? "").trim(),
    sort_order: toInt(formData.get("sort_order"), 0),
    is_published: toBool(formData.get("is_published")),
  };

  if (!input.title || !input.slug || !input.category_id) {
    redirect("/admin/products?error=missing");
  }

  if (id) {
    await updateProduct(id, input);
  } else {
    await createProduct(input);
  }

  redirect("/admin/products");
}

export async function deleteProductAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (id) await deleteProduct(id);
  redirect("/admin/products");
}

export async function updateInquiryStatusAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") as InquiryStatus;
  if (id && ["new", "read", "archived"].includes(status)) {
    await updateInquiryStatus(id, status);
  }
  redirect("/admin/inquiries");
}

export async function deleteInquiryAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (id) await deleteInquiry(id);
  redirect("/admin/inquiries");
}
