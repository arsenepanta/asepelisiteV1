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
  { label: "Diaspora", href: "/diaspora" },
  { label: "Rejoindre le réseau", href: "/rejoindre" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["comment-ca-marche"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
          else setActiveSection("");
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer dropdown si clic en dehors
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href.includes("#")) {
      const anchor = href.split("#")[1];
      return activeSection === anchor;
    }
    if (href === "/") return pathname === "/" && !activeSection;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1F3A6E]/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-[#1F3A6E] font-bold text-lg shadow-md">
            A
          </div>
          <span className="font-bold text-xl text-white tracking-wide">ASEPELI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.dropdown) {
              const isDropOpen = openDropdown === link.label;
              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(isDropOpen ? null : link.label)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      active ? "text-yellow-400" : "text-white/90 hover:text-yellow-400"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${isDropOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isDropOpen && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl py-2 z-50">
                      {/* Lien vers page principale */}
                      <Link
                        href={link.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm font-semibold text-[#1F3A6E] hover:bg-yellow-50 border-b border-gray-100"
                      >
                        Tous les services →
                      </Link>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  active ? "text-yellow-400" : "text-white/90 hover:text-yellow-400"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-block px-5 py-2.5 bg-yellow-400 text-[#1F3A6E] rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors shadow-md"
          >
            Devis gratuit
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1F3A6E] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 font-medium rounded-lg transition-colors ${
                      active
                        ? "text-yellow-400 bg-white/10"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          → {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 bg-yellow-400 text-[#1F3A6E] font-bold rounded-lg"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
