import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfos from "@/components/contact/ContactInfos";
import ContactFormulaire from "@/components/contact/ContactFormulaire";
import ContactZone from "@/components/contact/ContactZone";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactInfos />
      <ContactFormulaire />
      <ContactZone />
      <Footer />
    </main>
  );
}
