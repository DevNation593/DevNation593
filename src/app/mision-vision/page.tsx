import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MissionVision from "@/components/MissionVision";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Misión, Visión y Valores | DevNation593",
  description:
    "Conoce la misión, visión y los valores que guían a DevNation593 en el desarrollo de soluciones digitales innovadoras.",
};

export default function MisionVisionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <MissionVision />
      </main>
      <Footer />
    </>
  );
}
