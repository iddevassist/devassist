import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { Code, Globe, BarChart, PenTool, HelpCircle, BookOpen } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Pengerjaan Project IT",
    description: "Mulai dari pengembangan software, sistem informasi, hingga implementasi teknologi terkini.",
  },
  {
    icon: Globe,
    title: "Pembuatan Website",
    description: "Website company profile, toko online, landing page dengan desain modern dan responsif.",
  },
  {
    icon: BarChart,
    title: "Data Analysis & Machine Learning",
    description: "Olah data, visualisasi, dan pengembangan model AI untuk kebutuhan bisnis dan akademik.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Desain antarmuka aplikasi yang intuitif dan menarik untuk pengalaman pengguna optimal.",
  },
  {
    icon: HelpCircle,
    title: "Konsultasi IT",
    description: "Konsultasi seputar pengembangan sistem, infrastruktur, dan teknologi informasi.",
  },
  {
    icon: BookOpen,
    title: "Bantuan Tugas Akademik",
    description: "Pendampingan penyusunan skripsi, tesis, makalah, dan publikasi ilmiah.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-light">
      <Container>
        <SectionTitle
          subtitle="Layanan Kami"
          title="Solusi Lengkap untuk Berbagai Kebutuhan"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}