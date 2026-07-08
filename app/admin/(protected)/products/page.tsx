import Link from "next/link";
import {
  deleteProductAction,
  upsertProductAction,
} from "@/app/actions/admin";
import { listAllCategories } from "@/lib/queries/categories";
import { getProductById, listAllProducts } from "@/lib/queries/products";
import SafeImage from "@/components/SafeImage";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ edit?: string; error?: string }>;
};

export default async function AdminProductsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const [products, categories] = await Promise.all([
    listAllProducts().catch(() => []),
    listAllCategories().catch(() => []),
  ]);
  const editing = params.edit
    ? await getProductById(params.edit).catch(() => null)
    : null;

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl text-brown">Products</h1>
          <p className="font-sans text-sm text-brown-muted">
            These appear on the Full Catalogue page. Paste hosted image URLs.
          </p>
        </div>
        {editing && (
          <Link
            href="/admin/products"
            className="font-sans text-xs uppercase tracking-[0.16em] text-brown-muted"
          >
            Cancel edit
          </Link>
        )}
      </div>

      {params.error && (
        <p className="font-sans text-sm text-red-700">
          Title and category are required.
        </p>
      )}

      <form
        action={upsertProductAction}
        className="grid gap-4 border border-hairline p-5 sm:grid-cols-2"
      >
        <input type="hidden" name="id" value={editing?.id ?? ""} />
        <h2 className="sm:col-span-2 font-serif text-xl text-brown">
          {editing ? "Edit product" : "Add product"}
        </h2>

        <label className="flex flex-col gap-1.5">
          <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-brown-muted">
            Title
          </span>
          <input
            name="title"
            required
            defaultValue={editing?.title ?? ""}
            className="border border-hairline px-3 py-2 font-sans text-sm outline-none focus:border-brown"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-brown-muted">
            Category
          </span>
          <select
            name="category_id"
            required
            defaultValue={editing?.category_id ?? ""}
            className="border border-hairline px-3 py-2 font-sans text-sm outline-none focus:border-brown"
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-brown-muted">
            Slug
          </span>
          <input
            name="slug"
            placeholder="auto from title if blank"
            defaultValue={editing?.slug ?? ""}
            className="border border-hairline px-3 py-2 font-sans text-sm outline-none focus:border-brown"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-brown-muted">
            Sort order
          </span>
          <input
            name="sort_order"
            type="number"
            defaultValue={editing?.sort_order ?? 0}
            className="border border-hairline px-3 py-2 font-sans text-sm outline-none focus:border-brown"
          />
        </label>

        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-brown-muted">
            Meta
          </span>
          <input
            name="meta"
            placeholder="Budget Friendly · Regular Use"
            defaultValue={editing?.meta ?? ""}
            className="border border-hairline px-3 py-2 font-sans text-sm outline-none focus:border-brown"
          />
        </label>

        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-brown-muted">
            Description
          </span>
          <textarea
            name="description"
            rows={3}
            defaultValue={editing?.description ?? ""}
            className="border border-hairline px-3 py-2 font-sans text-sm outline-none focus:border-brown"
          />
        </label>

        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-brown-muted">
            Image URL
          </span>
          <input
            name="image_url"
            placeholder="https://..."
            defaultValue={editing?.image_url ?? ""}
            className="border border-hairline px-3 py-2 font-sans text-sm outline-none focus:border-brown"
          />
        </label>

        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-brown-muted">
            Image alt
          </span>
          <input
            name="image_alt"
            defaultValue={editing?.image_alt ?? ""}
            className="border border-hairline px-3 py-2 font-sans text-sm outline-none focus:border-brown"
          />
        </label>

        <label className="flex items-center gap-2 sm:col-span-2">
          <input
            type="checkbox"
            name="is_published"
            defaultChecked={editing?.is_published ?? true}
          />
          <span className="font-sans text-sm text-brown">Published</span>
        </label>

        <button
          type="submit"
          className="bg-brown px-5 py-3 font-sans text-xs uppercase tracking-[0.18em] text-cream sm:col-span-2 sm:justify-self-start"
        >
          {editing ? "Update product" : "Create product"}
        </button>
      </form>

      <div className="overflow-x-auto border border-hairline">
        <table className="min-w-full text-left font-sans text-sm">
          <thead className="border-b border-hairline bg-brown/[0.03]">
            <tr>
              <th className="px-4 py-3 font-medium">Preview</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-hairline">
                <td className="px-4 py-3">
                  <div className="relative h-12 w-16 overflow-hidden bg-brown/5">
                    <SafeImage
                      src={product.image_url}
                      alt={product.image_alt || product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-4 py-3">{product.title}</td>
                <td className="px-4 py-3 text-brown-muted">
                  {product.category_title}
                </td>
                <td className="px-4 py-3">
                  {product.is_published ? "Published" : "Draft"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/products?edit=${product.id}`}
                      className="text-[11px] uppercase tracking-[0.14em] text-gold"
                    >
                      Edit
                    </Link>
                    <form action={deleteProductAction}>
                      <input type="hidden" name="id" value={product.id} />
                      <button
                        type="submit"
                        className="text-[11px] uppercase tracking-[0.14em] text-red-700"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-brown-muted"
                >
                  No products yet. Add one above or run sql/seed.sql in Neon.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
