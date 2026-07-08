import { getSql, type CategoryRow } from "@/lib/db";

export async function listPublishedCategories(): Promise<CategoryRow[]> {
  const sql = getSql();
  return (await sql`
    SELECT *
    FROM categories
    WHERE is_published = TRUE
    ORDER BY sort_order ASC, title ASC
  `) as CategoryRow[];
}

export async function listAllCategories(): Promise<CategoryRow[]> {
  const sql = getSql();
  return (await sql`
    SELECT *
    FROM categories
    ORDER BY sort_order ASC, title ASC
  `) as CategoryRow[];
}

export async function getCategoryById(id: string) {
  const sql = getSql();
  const rows = (await sql`
    SELECT * FROM categories WHERE id = ${id} LIMIT 1
  `) as CategoryRow[];
  return rows[0] ?? null;
}

export async function getCategoryBySlug(slug: string) {
  const sql = getSql();
  const rows = (await sql`
    SELECT * FROM categories WHERE slug = ${slug} LIMIT 1
  `) as CategoryRow[];
  return rows[0] ?? null;
}

export type CategoryInput = {
  title: string;
  slug: string;
  variants_label: string;
  features: string;
  image_url: string;
  image_alt: string;
  sort_order: number;
  is_published: boolean;
};

export async function createCategory(input: CategoryInput) {
  const sql = getSql();
  const rows = (await sql`
    INSERT INTO categories (
      title, slug, variants_label, features, image_url, image_alt, sort_order, is_published
    ) VALUES (
      ${input.title},
      ${input.slug},
      ${input.variants_label},
      ${input.features},
      ${input.image_url},
      ${input.image_alt},
      ${input.sort_order},
      ${input.is_published}
    )
    RETURNING *
  `) as CategoryRow[];
  return rows[0];
}

export async function updateCategory(id: string, input: CategoryInput) {
  const sql = getSql();
  const rows = (await sql`
    UPDATE categories SET
      title = ${input.title},
      slug = ${input.slug},
      variants_label = ${input.variants_label},
      features = ${input.features},
      image_url = ${input.image_url},
      image_alt = ${input.image_alt},
      sort_order = ${input.sort_order},
      is_published = ${input.is_published},
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `) as CategoryRow[];
  return rows[0] ?? null;
}

export async function deleteCategory(id: string) {
  const sql = getSql();
  await sql`DELETE FROM categories WHERE id = ${id}`;
}

export async function countCategories() {
  const sql = getSql();
  const rows = (await sql`SELECT COUNT(*)::int AS count FROM categories`) as {
    count: number;
  }[];
  return rows[0]?.count ?? 0;
}
