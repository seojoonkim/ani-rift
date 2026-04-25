import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Features from "@/components/Features";
import Trending from "@/components/Trending";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Featured />
        <Features />
        <Trending />
        <HowItWorks />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
