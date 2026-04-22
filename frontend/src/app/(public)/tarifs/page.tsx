import TarifsHero from "@/components/tarifs/TarifsHero";
import TarifsPlans from "@/components/tarifs/TarifsPlans";
import TarifsComparatif from "@/components/tarifs/TarifsComparatif";
import TarifsServices from "@/components/tarifs/TarifsServices";
import TarifsFAQ from "@/components/tarifs/TarifsFAQ";
import TarifsCTA from "@/components/tarifs/TarifsCTA";

export default function TarifsPage() {
  return (
    <>
      <TarifsHero />
      <TarifsPlans />
      <TarifsComparatif />
      <TarifsServices />
      <TarifsFAQ />
      <TarifsCTA />
    </>
  );
}
