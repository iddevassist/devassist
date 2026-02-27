import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { Shield, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Didukung oleh para ahli di bidang IT dan akademik dengan pengalaman bertahun-tahun.",
  },
  {
    icon: Shield,
    title: "Confidential & Trusted",
    description: "Kami menjaga privasi dan kerahasiaan data Anda dengan sistem keamanan terbaik.",
  },
  {
    icon: Zap,
    title: "Berpengalaman",
    description: "Telah menangani berbagai project dari mahasiswa hingga perusahaan ternama.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Tentang Kami"
          title="Mitra Terpercaya untuk Kebutuhan Akademik & IT Anda"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-light rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}