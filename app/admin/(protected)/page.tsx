import Link from "next/link";
import { countCategories } from "@/lib/queries/categories";
import { countProducts } from "@/lib/queries/products";
import { countInquiries, countNewInquiries } from "@/lib/queries/inquiries";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let categories = 0;
  let products = 0;
  let inquiries = 0;
  let newInquiries = 0;

  try {
    [categories, products, inquiries, newInquiries] = await Promise.all([
      countCategories(),
      countProducts(),
      countInquiries(),
      countNewInquiries(),
    ]);
  } catch (error) {
    console.error("Dashboard stats failed", error);
  }

  const cards = [
    {
      label: "Categories",
      value: categories,
      href: "/admin/categories",
      detail: "Manage catalogue sections",
    },
    {
      label: "Products",
      value: products,
      href: "/admin/products",
      detail: "Add items with image URLs",
    },
    {
      label: "New inquiries",
      value: newInquiries,
      href: "/admin/inquiries",
      detail: `${inquiries} total conversations`,
    },
  ];

  return (
    <div>
      <h1 className="mb-2 font-serif text-3xl text-brown">Dashboard</h1>
      <p className="mb-8 font-sans text-sm text-brown-muted">
        Manage products, categories, and contact inquiries.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="border border-hairline p-5 transition-colors hover:border-brown/40"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brown-muted">
              {card.label}
            </p>
            <p className="mt-3 font-serif text-4xl text-brown">{card.value}</p>
            <p className="mt-2 font-sans text-xs text-brown-muted">
              {card.detail}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
