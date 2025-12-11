import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSectionDemo from "@/components/FeaturesSectionDemo"; // 👈 The new 3D Globe Grid
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <FeaturesSectionDemo />
      <Footer />
    </main>
  );
}