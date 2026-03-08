import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <Technologies />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
