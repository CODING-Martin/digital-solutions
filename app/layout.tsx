import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Core - Desarrollo Web y Sistemas",
  description: "Creamos sitios web y sistemas que impulsan tu negocio. Desarrollo web, CRM a medida y soluciones digitales en Mendoza, Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
