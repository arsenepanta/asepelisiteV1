"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Share2, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Services",
      links: [
        { label: "Électricité", href: "/services?cat=electricite" },
        { label: "Plomberie", href: "/services?cat=plomberie" },
        { label: "Nettoyage", href: "/services?cat=nettoyage" },
        { label: "Rénovation", href: "/services?cat=renovation" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Carrières", href: "/careers" },
        { label: "Presse", href: "/press" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Conditions", href: "/terms" },
        { label: "Confidentialité", href: "/privacy" },
        { label: "Sitemap", href: "/sitemap.xml" },
      ],
    },
  ];

  const socials = [
    { label: "f", href: "https://facebook.com/asepeli", color: "bg-blue-600" },
    { label: "𝕏", href: "https://twitter.com/asepeli", color: "bg-black" },
    { label: "in", href: "https://linkedin.com/company/asepeli", color: "bg-blue-700" },
    { label: "📷", href: "https://instagram.com/asepeli", color: "bg-pink-600" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black">A</span>
              </div>
              <div>
                <p className="font-black text-gray-900 text-sm">ASEPELI</p>
                <p className="text-xs text-gray-500">Services Habitat</p>
              </div>
            </Link>
            <p className="text-sm text-gray-600 mb-6">
              Connectez-vous avec les meilleurs prestataires de services à Kinshasa.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">Kinshasa, RDC</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-500 flex-shrink-0" />
                <a href="tel:+243" className="text-sm text-gray-600 hover:text-yellow-500 transition-colors">
                  +243 XXX XXX XXX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-500 flex-shrink-0" />
                <a href="mailto:contact@asepeli.cd" className="text-sm text-gray-600 hover:text-yellow-500 transition-colors">
                  contact@asepeli.cd
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-yellow-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Socials */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-4">Suivez-nous</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white font-bold text-sm hover:opacity-80 transition-all shadow-sm hover:shadow-md`}
                    aria-label={social.label}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500 flex items-center justify-center md:justify-end gap-1">
                © {currentYear} ASEPELI. Tous droits réservés. |{" "}
                <Link href="/privacy" className="hover:text-yellow-500 transition-colors">
                  Confidentialité
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
