"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "243XXXXXXXXX";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour ASEPELI ! Je souhaite obtenir un devis pour un service à Kinshasa."
);

const badges = [
  "Prestataires vérifiés",
  "Prix clairs", 
  "Service garanti",
];

const paymentMethods = [
  { label: "M-PESA", color: "bg-red-500" },
  { label: "Airtel", color: "bg-red-600" },
  { label: "Orange", color: "bg-orange-500" },
  { label: "Africell", color: "bg-blue-500" },
  { label: "Wise", color: "bg-green-500" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f1f5c] via-[#1a3a8f] to-[#0d1b4b]">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-blue-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-white">

            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm
                         border border-white/20 rounded-full px-4 py-2 text-sm
                         text-blue-100 mb-6"
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              KINSHASA · RDC · SERVICES HABITAT
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6"
            >
              Votre habitat entre{" "}
              <span className="text-yellow-400">de bonnes mains</span>{" "}
              à Kinshasa.
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-100 text-lg mb-4"
            >
              Professionnels vérifiés · Prix clairs · Service garanti
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-green-500/20
                             border border-green-400/40 text-green-300
                             text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  <CheckCircle size={13} />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Pack info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-blue-200 text-sm mb-8"
            >
              Du nettoyage à l&apos;ingénierie avancée —{" "}
              <span className="text-white font-semibold">
                Pack Basique, Standard & Premium
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2
                           bg-yellow-400 hover:bg-yellow-300 text-gray-900
                           font-bold text-base px-8 py-4 rounded-xl
                           transition-all duration-200 shadow-lg hover:shadow-yellow-400/30"
              >
                Demander un devis gratuit
                <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           bg-green-500 hover:bg-green-400 text-white
                           font-bold text-base px-8 py-4 rounded-xl
                           transition-all duration-200 shadow-lg"
              >
                <MessageCircle size={18} />
                WhatsApp ASEPELI
              </a>
            </motion.div>

            {/* Paiements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-blue-300 text-xs uppercase tracking-widest mb-3 font-medium">
                Paiement accepté via
              </p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method.label}
                    className={`${method.color} text-white text-xs font-bold
                               px-3 py-1.5 rounded-md`}
                  >
                    {method.label}
                  </span>
                ))}
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-md">
                  Virement
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">

              {/* Image principale */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl
                              border-4 border-white/20 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
                  alt="Artisan professionnel ASEPELI Kinshasa"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay léger */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
                {/* Label bas */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-bold text-sm">Artisan professionnel ASEPELI</p>
                  <p className="text-xs text-blue-200">Kinshasa, RDC</p>
                </div>
              </div>

              {/* Badge vérifié */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-6 top-8 bg-white rounded-xl
                           shadow-xl p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Vérifié KYC</p>
                  <p className="text-xs text-gray-400">45+ prestataires</p>
                </div>
              </motion.div>

              {/* Badge missions */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute -right-6 bottom-16 bg-white rounded-xl
                           shadow-xl p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-500 font-bold text-sm">⭐</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">150+ missions</p>
                  <p className="text-xs text-gray-400">Note 4.7/5 ⭐</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 53.3C672 58.7 768 69.3 864 69.3C960 69.3 1056 58.7 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
