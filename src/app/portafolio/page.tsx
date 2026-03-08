import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portafolio | DevNation593",
  description:
    "Conoce los proyectos que hemos desarrollado. Soluciones web, móviles y en la nube para empresas en Ecuador y Latinoamérica.",
};

export default function PortafolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
