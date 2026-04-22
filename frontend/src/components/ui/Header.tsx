"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Rejoindre", href: "/rejoindre" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/40 transition-all">
              <span className="text-white font-black text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-black text-gray-900 text-sm leading-none">ASEPELI</p>
              <p className="text-xs text-gray-500">Services Habitat</p>
            </div>
          </Link>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm rounded-lg transition-all shadow-md hover:shadow-yellow-400/30"
            >
              Devis gratuit
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X size={24} className="text-gray-900" />
              ) : (
                <Menu size={24} className="text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gray-100 py-4 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm rounded-lg transition-all text-center"
              onClick={() => setIsOpen(false)}
            >
              Devis gratuit
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}
