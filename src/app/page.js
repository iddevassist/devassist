import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </>
  );
}