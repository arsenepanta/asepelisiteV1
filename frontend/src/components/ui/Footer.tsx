"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Plomberie", href: "/services?cat=plomberie" },
    { label: "Électricité", href: "/services?cat=electricite" },
    { label: "Nettoyage", href: "/services?cat=nettoyage" },
    { label: "Rénovation", href: "/services?cat=renovation" },
    { label: "Accompagnement", href: "/services?cat=accompagnement" },
    { label: "IA", href: "/services?cat=ia" },
  ];

  const liens = [
    { label: "Recherche & Filtres", href: "/services" },
    { label: "Comment ça marche", href: "/rejoindre" },
    { label: "Service client", href: "/contact" },
    { label: "Mentions légales", href: "/tarifs" },
    { label: "Confidentialité", href: "/faq" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Colonne 1 — Logo + description + réseaux */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.jpeg"
                alt="Asepeli Logo"
                width={140}
                height={45}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Connectez-vous avec les meilleurs prestataires de services à Kinshasa et partout en RDC.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="none" stroke="white" strokeWidth="2" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line fill="none" stroke="white" strokeWidth="2" x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 — Nos Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Liens utiles */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Liens Utiles
            </h3>
            <ul className="space-y-3">
              {liens.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Avenue Kasa-Vubu, Kinshasa, RDC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-400 flex-shrink-0" />
                <a href="tel:+243" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +243 XXX XXX XXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@asepeli.cd" className="text-sm text-gray-400 hover:text-white transition-colors">
                  contact@asepeli.cd
                </a>
              </li>
            </ul>
            <Link href="/contact"
              className="inline-block bg-yellow-400 text-gray-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors">
              Demander un devis →
            </Link>
          </div>

        </div>

        {/* Barre du bas */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} ASEPELI — Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/faq" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Confidentialité</Link>
            <Link href="/tarifs" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Conditions d&apos;utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
