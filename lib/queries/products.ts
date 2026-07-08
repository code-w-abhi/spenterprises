import { getSql, type ProductRow } from "@/lib/db";

export async function listPublishedProducts(categorySlug?: string | null) {
  const sql = getSql();

  if (categorySlug && categorySlug !== "all") {
    return (await sql`
      SELECT
        p.*,
        c.title AS category_title,
        c.slug AS category_slug
      FROM products p
      INNER JOIN categories c ON c.id = p.category_id
      WHERE p.is_published = TRUE
        AND c.is_published = TRUE
        AND c.slug = ${categorySlug}
      ORDER BY p.sort_order ASC, p.title ASC
    `) as ProductRow[];
  }

  return (await sql`
    SELECT
      p.*,
      c.title AS category_title,
      c.slug AS category_slug
    FROM products p
    INNER JOIN categories c ON c.id = p.category_id
    WHERE p.is_published = TRUE
      AND c.is_published = TRUE
    ORDER BY c.sort_order ASC, p.sort_order ASC, p.title ASC
  `) as ProductRow[];
}

export async function listAllProducts() {
  const sql = getSql();
  return (await sql`
    SELECT
      p.*,
      c.title AS category_title,
      c.slug AS category_slug
    FROM products p
    INNER JOIN categories c ON c.id = p.category_id
    ORDER BY c.sort_order ASC, p.sort_order ASC, p.title ASC
  `) as ProductRow[];
}

export async function getProductById(id: string) {
  const sql = getSql();
  const rows = (await sql`
    SELECT
      p.*,
      c.title AS category_title,
      c.slug AS category_slug
    FROM products p
    INNER JOIN categories c ON c.id = p.category_id
    WHERE p.id = ${id}
    LIMIT 1
  `) as ProductRow[];
  return rows[0] ?? null;
}

export type ProductInput = {
  category_id: string;
  title: string;
  slug: string;
  meta: string;
  description: string;
  image_url: string;
  image_alt: string;
  sort_order: number;
  is_published: boolean;
};

export async function createProduct(input: ProductInput) {
  const sql = getSql();
  const rows = (await sql`
    INSERT INTO products (
      category_id, title, slug, meta, description, image_url, image_alt, sort_order, is_published
    ) VALUES (
      ${input.category_id},
      ${input.title},
      ${input.slug},
      ${input.meta},
      ${input.description},
      ${input.image_url},
      ${input.image_alt},
      ${input.sort_order},
      ${input.is_published}
    )
    RETURNING *
  `) as ProductRow[];
  return rows[0];
}

export async function updateProduct(id: string, input: ProductInput) {
  const sql = getSql();
  const rows = (await sql`
    UPDATE products SET
      category_id = ${input.category_id},
      title = ${input.title},
      slug = ${input.slug},
      meta = ${input.meta},
      description = ${input.description},
      image_url = ${input.image_url},
      image_alt = ${input.image_alt},
      sort_order = ${input.sort_order},
      is_published = ${input.is_published},
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `) as ProductRow[];
  return rows[0] ?? null;
}

export async function deleteProduct(id: string) {
  const sql = getSql();
  await sql`DELETE FROM products WHERE id = ${id}`;
}

export async function countProducts() {
  const sql = getSql();
  const rows = (await sql`SELECT COUNT(*)::int AS count FROM products`) as {
    count: number;
  }[];
  return rows[0]?.count ?? 0;
}
