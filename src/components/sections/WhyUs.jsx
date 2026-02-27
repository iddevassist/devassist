import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { CheckCircle, Clock, Shield, Users, Zap, Settings } from "lucide-react";

const reasons = [
  { icon: Zap, text: "Fast Response" },
  { icon: Users, text: "Professional Team" },
  { icon: Shield, text: "Confidential" },
  { icon: Clock, text: "On Time Delivery" },
  { icon: Settings, text: "Custom Solution" },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <Container>
        <SectionTitle
          subtitle="Kenapa Memilih Kami"
          title="Kami Berkomitmen Memberikan yang Terbaik"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <reason.icon className="w-10 h-10 text-primary mb-3" />
              <span className="font-semibold text-dark">{reason.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}