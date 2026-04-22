import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DiasporaHero from "@/components/diaspora/DiasporaHero";
import DiasporaHow from "@/components/diaspora/DiasporaHow";
import DiasporaPack from "@/components/diaspora/DiasporaPack";
import DiasporaTestimonials from "@/components/diaspora/DiasporaTestimonials";

export default function DiasporaPage() {
  return (
    <main>
      <Navbar />
      <DiasporaHero />
      <DiasporaHow />
      <DiasporaPack />
      <DiasporaTestimonials />
      <Footer />
    </main>
  );
}
