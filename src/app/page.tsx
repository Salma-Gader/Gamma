import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PhotographyShowcase from "@/components/sections/PhotographyShowcase";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import ImmersiveBreak from "@/components/sections/ImmersiveBreak";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <PhotographyShowcase />
        <VideoShowcase />
        <Services />
        <About />
        <ImmersiveBreak />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
