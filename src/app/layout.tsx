import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevNation593 | Construyendo Soluciones Digitales para el Futuro",
  description:
    "DevNation593 crea aplicaciones web, móviles y en la nube modernas. Equipo experto en desarrollo de software entregando soluciones escalables e innovadoras.",
  keywords: [
    "desarrollo de software",
    "desarrollo web",
    "aplicaciones móviles",
    "soluciones en la nube",
    "DevNation593",
  ],
  openGraph: {
    title: "DevNation593 | Construyendo Soluciones Digitales para el Futuro",
    description:
      "Equipo experto en desarrollo de software entregando soluciones escalables e innovadoras.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
