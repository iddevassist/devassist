import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";
import testimonialsData from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Testimoni"
          title="Apa Kata Klien Kami"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}