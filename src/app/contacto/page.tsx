import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto | DevNation593",
  description:
    "Contáctanos para discutir tu próximo proyecto de desarrollo de software. Estamos en Quito, Ecuador.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
