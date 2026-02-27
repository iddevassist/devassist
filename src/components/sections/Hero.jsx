import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-28 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6 animate-fadeInUp">
            Solusi Profesional untuk <span className="text-gradient">Kebutuhan Akademik & IT</span> Anda
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl animate-fadeInUp animation-delay-200">
            devassist.id adalah mitra terpercaya untuk pengerjaan project, pengembangan sistem, data analysis, dan bantuan tugas akademik dengan standar profesional dan kerahasiaan terjamin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
            <Button href="#contact" variant="primary">Konsultasi Sekarang</Button>
            <Button href="#portfolio" variant="outline">Lihat Portfolio</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}