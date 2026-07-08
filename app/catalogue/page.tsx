import type { Metadata } from "next";
import Header from "@/components/Header";
import FullCatalogue from "@/components/FullCatalogue";
import Footer from "@/components/Footer";
import { listPublishedCategories } from "@/lib/queries/categories";
import { listPublishedProducts } from "@/lib/queries/products";

export const metadata: Metadata = {
  title: "Full Catalogue | S.P. Enterprises",
  description:
    "Explore hang tags, woven labels, printed labels, heat transfer, and more branding solutions from S.P. Enterprises.",
};

export const dynamic = "force-dynamic";

type CataloguePageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function CataloguePage({
  searchParams,
}: CataloguePageProps) {
  const params = await searchParams;

  let categories: Awaited<ReturnType<typeof listPublishedCategories>> = [];
  let products: Awaited<ReturnType<typeof listPublishedProducts>> = [];

  try {
    [categories, products] = await Promise.all([
      listPublishedCategories(),
      listPublishedProducts(),
    ]);
  } catch (error) {
    console.error("Failed to load catalogue", error);
  }

  return (
    <main className="relative flex min-h-full flex-1 flex-col bg-cream">
      <Header variant="solid" />
      <FullCatalogue
        categories={categories.map((category) => ({
          id: category.id,
          title: category.title,
          slug: category.slug,
        }))}
        products={products.map((product) => ({
          id: product.id,
          title: product.title,
          meta: product.meta,
          description: product.description,
          image_url: product.image_url,
          image_alt: product.image_alt,
          category_slug: product.category_slug,
          category_title: product.category_title,
        }))}
        initialCategory={params.category}
      />
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
