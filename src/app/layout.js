    import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "devassist.id - Solusi Profesional Akademik & IT",
  description: "devassist.id menyediakan layanan profesional di bidang pendidikan dan teknologi: pengerjaan project, website, data analysis, dan kebutuhan IT lainnya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}