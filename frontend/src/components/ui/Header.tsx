"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Plomberie", href: "/services/plomberie" },
      { label: "Électricité", href: "/services/electricite" },
      { label: "Peinture", href: "/services/peinture" },
      { label: "Climatisation", href: "/services/climatisation" },
      { label: "Livraison & Déménagement", href: "/services/demenagement" },
      { label: "Maçonnerie", href: "/services/maconnerie" },
    ],
  },
  { label: "Comment ça marche", href: "/#comment-ca-marche" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "FAQ", href: "/faq" },
  { label: "Diaspora", href: "/diaspora" },
  { label: "Rejoindre le réseau", href: "/rejoindre" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-500">Asepeli</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${pathname === link.href ? "text-orange-500" : "text-gray-700"}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/devis"
              className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700"
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === link.label && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-orange-500"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-orange-500"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/devis"
            className="block mt-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-orange-600"
          >
            Demander un devis
          </Link>
        </div>
      )}
    </header>
  );
}
