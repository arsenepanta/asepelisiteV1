import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/detail/ServiceHero";
import ServiceDetails from "@/components/services/detail/ServiceDetails";
import ServicePricing from "@/components/services/detail/ServicePricing";
import ServiceCTA from "@/components/services/detail/ServiceCTA";
import { servicesData } from "@/data/servicesData";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  return (
    <main>
      <Navbar />
      <ServiceHero service={service} />
      <ServiceDetails service={service} />
      <ServicePricing service={service} />
      <ServiceCTA service={service} />
      <Footer />
    </main>
  );
}
