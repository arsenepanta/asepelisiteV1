import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Packs from "@/components/home/Packs";
import HowItWorks from "@/components/home/HowItWorks";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Packs />
      <HowItWorks />
      <Testimonials />
      <WhatsAppWidget />
    </>
  );
}
