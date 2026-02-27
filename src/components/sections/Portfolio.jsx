import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PortfolioCard from "../ui/PortfolioCard";
import portfolioData from "@/data/portfolio.json";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Portfolio"
          title="Beberapa Project yang Telah Kami Selesaikan"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}