import Section from "./Section";

const products = [
  {
    title: "Custom Packaging",
    description:
      "Tailored boxes, wraps, and protective packaging that present your product with clarity and care.",
  },
  {
    title: "Brand Identity Kits",
    description:
      "Cohesive visual systems — from labels to collateral — designed to reinforce brand recognition.",
  },
  {
    title: "Label & Print Solutions",
    description:
      "High-quality print finishes that communicate quality the moment a customer picks up your product.",
  },
];

export default function Products() {
  return (
    <Section id="products" eyebrow="What We Offer" title="Products">
      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        {products.map((product) => (
          <article key={product.title} className="text-center md:text-left">
            <h3 className="mb-3 font-serif text-xl font-medium text-brown sm:text-2xl">
              {product.title}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-brown-muted sm:text-[15px]">
              {product.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
