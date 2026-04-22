"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Pack Basique", href: "/services#basique" },
      { label: "Pack Standard", href: "/services#standard" },
      { label: "Pack Premium", href: "/services#premium" },
      { label: "À la carte", href: "/services#carte" },
    ],
  },
  { label: "Comment ça marche", href: "/#fonctionnement" },
  { label: "Diaspora", href: "/diaspora" },
  { label: "Rejoindre le réseau", href: "/rejoindre" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1F3A6E]/95 backdrop-blur-sm shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg font-heading">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-white">
                ASEPELI
              </span>
              <span className="text-xs leading-none text-blue-200">
                Services à l&apos;Habitat
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.label === "Diaspora" ? (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg font-semibold text-sm bg-accent text-white hover:bg-accent/90 transition-all duration-200"
                  >
                    {link.label} ←
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                )}

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              ✦ Devis gratuit
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#1F3A6E] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`block px-4 py-3 font-medium rounded-lg transition-colors ${
                    link.label === "Diaspora"
                      ? "bg-accent text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label === "Diaspora" ? `${link.label} ←` : link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 flex flex-col gap-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                      >
                        → {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                ✦ Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
