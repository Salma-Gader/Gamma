import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Team from "@/components/sections/Team";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VerticalSpotlight from "@/components/sections/VerticalSpotlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.08),transparent_45%)] text-gray-100">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Portfolio />
      <VerticalSpotlight />
      <Contact />
      <Footer />
    </main>
  );
}

