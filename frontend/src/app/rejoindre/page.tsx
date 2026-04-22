import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RejoindreHero from "@/components/rejoindre/RejoindreHero";
import RejoindreAvantages from "@/components/rejoindre/RejoindreAvantages";
import RejoindreFormulaire from "@/components/rejoindre/RejoindreFormulaire";
import RejoindreFAQ from "@/components/rejoindre/RejoindreFAQ";

export default function RejoинdrePage() {
  return (
    <main>
      <Navbar />
      <RejoindreHero />
      <RejoindreAvantages />
      <RejoindreFormulaire />
      <RejoindreFAQ />
      <Footer />
    </main>
  );
}
