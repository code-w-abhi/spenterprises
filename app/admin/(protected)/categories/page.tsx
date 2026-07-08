import Link from "next/link";
import {
  deleteCategoryAction,
  upsertCategoryAction,
} from "@/app/actions/admin";
import { getCategoryById, listAllCategories } from "@/lib/queries/categories";
import SafeImage from "@/components/SafeImage";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ edit?: string; error?: string }>;
};

export default async function AdminCategoriesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const categories = await listAllCategories().catch(() => []);
  const editing = params.edit
    ? await getCategoryById(params.edit).catch(() => null)
    : null;

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl text-brown">Categories</h1>
          <p className="font-sans text-sm text-brown-muted">
            These power the homepage Product Categories section.
          </p>
        </div>
        {editing && (
          <Link
            href="/admin/categories"
            className="font-sans text-xs uppercase tracking-[0.16em] text-brown-muted"
          >
            Cancel edit
          </Link>
        )}
      </div>

      {params.error && (
        <p className="font-sans text-sm text-red-700">
          Title is required. Please fill the form and try again.
        </p>
      )}

      <form
        action={upsertCategoryAction}
        className="grid gap-4 border border-hairline p-5 sm:grid-cols-2"
      >
        <input type="hidden" name="id" value={editing?.id ?? ""} />
        <h2 className="sm:col-span-2 font-serif text-xl text-brown">
          {editing ? "Edit category" : "Add category"}
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
            Variants label
          </span>
          <input
            name="variants_label"
            placeholder="8 Variants"
            defaultValue={editing?.variants_label ?? ""}
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
            Features
          </span>
          <input
            name="features"
            placeholder="Daily Use · Multi Piece · Embossed"
            defaultValue={editing?.features ?? ""}
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
          {editing ? "Update category" : "Create category"}
        </button>
      </form>

      <div className="overflow-x-auto border border-hairline">
        <table className="min-w-full text-left font-sans text-sm">
          <thead className="border-b border-hairline bg-brown/[0.03]">
            <tr>
              <th className="px-4 py-3 font-medium">Preview</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b border-hairline">
                <td className="px-4 py-3">
                  <div className="relative h-12 w-16 overflow-hidden bg-brown/5">
                    <SafeImage
                      src={category.image_url}
                      alt={category.image_alt || category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-4 py-3">{category.title}</td>
                <td className="px-4 py-3 text-brown-muted">{category.slug}</td>
                <td className="px-4 py-3">
                  {category.is_published ? "Published" : "Draft"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/categories?edit=${category.id}`}
                      className="uppercase tracking-[0.14em] text-[11px] text-gold"
                    >
                      Edit
                    </Link>
                    <form action={deleteCategoryAction}>
                      <input type="hidden" name="id" value={category.id} />
                      <button
                        type="submit"
                        className="uppercase tracking-[0.14em] text-[11px] text-red-700"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-brown-muted"
                >
                  No categories yet. Add one above or run sql/seed.sql in Neon.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
