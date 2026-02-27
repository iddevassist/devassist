import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Cta() {
  return (
    <section className="bg-dark py-16 md:py-24">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap menyelesaikan project Anda?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan Anda dengan tim kami. Dapatkan solusi terbaik untuk project akademik atau IT Anda.
          </p>
          <Button href="#contact" variant="primary" className="bg-primary hover:bg-blue-700">
            Hubungi Sekarang
          </Button>
        </div>
      </Container>
    </section>
  );
}