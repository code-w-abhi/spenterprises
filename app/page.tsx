import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalogue from "@/components/Catalogue";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Header />
      <Hero />
      <Catalogue />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
