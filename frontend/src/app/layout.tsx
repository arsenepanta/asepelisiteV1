import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ASEPELI - Services Habitat Kinshasa",
  description: "Trouvez les meilleurs prestataires de services à Kinshasa: électricité, plomberie, nettoyage, rénovation et plus.",
  keywords: "services, habitat, kinshasa, artisans, prestataires, électricien, plombier",
  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: "https://asepeli.cd",
    siteName: "ASEPELI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${playfair.variable} font-poppins antialiased bg-white`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
