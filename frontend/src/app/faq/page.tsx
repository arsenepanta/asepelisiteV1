import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQHero from "@/components/faq/FAQHero";
import FAQContent from "@/components/faq/FAQContent";
import FAQCTA from "@/components/faq/FAQCTA";

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <FAQHero />
      <FAQContent />
      <FAQCTA />
      <Footer />
    </main>
  );
}
