import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Trending from "@/components/Trending";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <Trending />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
