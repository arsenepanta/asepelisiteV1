"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "243XXXXXXXXX";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour ASEPELI ! Je souhaite obtenir un devis pour un service à Kinshasa."
);

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Popup message */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white rounded-2xl shadow-2xl p-4 w-72 
                       border border-gray-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-whatsapp rounded-full 
                                flex items-center justify-center">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-800">ASEPELI</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    En ligne
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Message bubble */}
            <div className="bg-gray-50 rounded-xl p-3 mb-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                👋 Bonjour ! Comment puis-je vous aider aujourd&apos;hui ?
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Décrivez votre besoin et recevez un devis sous{" "}
                <strong>2–24h</strong> ⚡
              </p>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-sm py-3"
            >
              <MessageCircle size={16} />
              Écrire sur WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-whatsapp rounded-full shadow-2xl 
                   flex items-center justify-center text-white
                   hover:bg-green-500 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring */}
        <span className="absolute w-16 h-16 bg-whatsapp rounded-full 
                         animate-ping opacity-25" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
