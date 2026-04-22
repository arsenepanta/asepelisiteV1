import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">ASEPELI</p>
                <p className="text-xs text-gray-400">Services à l'habitat</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              La plateforme de confiance pour tous vos travaux à domicile à Kinshasa. 
              Techniciens vérifiés, devis gratuit, paiement Mobile Money.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/243XXXXXXXXX" target="_blank"
                className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <span className="text-base">💬</span>
              </a>
              <a href="#" className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span className="text-base">📘</span>
              </a>
              <a href="#" className="w-9 h-9 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors">
                <span className="text-base">📸</span>
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">Nos Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "🔧 Plomberie", href: "/services/plomberie" },
                { label: "⚡ Électricité", href: "/services/electricite" },
                { label: "🎨 Peinture", href: "/services/peinture" },
                { label: "❄️ Climatisation", href: "/services/climatisation" },
                { label: "🚚 Déménagement", href: "/services/demenagement" },
                { label: "🏗️ Maçonnerie", href: "/services/maconnerie" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Liens utiles */}
          <div>
            <h3 className="text-white font-semibold mb-5">Liens utiles</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Nos Packs & Tarifs", href: "/#packs" },
                { label: "Comment ça marche", href: "/#how-it-works" },
                { label: "Service Diaspora", href: "/diaspora" },
                { label: "Rejoindre le réseau", href: "/rejoindre" },
                { label: "Nous contacter", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span className="text-gray-400">Kinshasa, République Démocratique du Congo</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📱</span>
                <a href="https://wa.me/243XXXXXXXXX" className="text-green-400 hover:text-green-300 transition-colors">
                  +243 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">✉️</span>
                <a href="mailto:contact@asepeli.com" className="hover:text-white transition-colors">
                  contact@asepeli.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">🕐</span>
                <span className="text-gray-400">Lun–Sam : 7h–20h</span>
              </li>
            </ul>

            {/* CTA urgence */}
            <a href="https://wa.me/243XXXXXXXXX" target="_blank"
              className="mt-6 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors">
              <span>💬</span>
              Urgence ? Écrivez-nous
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 ASEPELI. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/confidentialite" className="hover:text-gray-300 transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgv" className="hover:text-gray-300 transition-colors">
              CGV
            </Link>
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
