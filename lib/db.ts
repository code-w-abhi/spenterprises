import { neon } from "@neondatabase/serverless";

export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  return neon(url);
}

export type CategoryRow = {
  id: string;
  title: string;
  slug: string;
  variants_label: string;
  features: string;
  image_url: string;
  image_alt: string;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type ProductRow = {
  id: string;
  category_id: string;
  title: string;
  slug: string;
  meta: string;
  description: string;
  image_url: string;
  image_alt: string;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  category_title?: string;
  category_slug?: string;
};

export type InquiryRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  product_interest: string;
  message: string;
  status: "new" | "read" | "archived";
  created_at: string;
};

export type InquiryStatus = InquiryRow["status"];
