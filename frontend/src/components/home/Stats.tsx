"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Missions réalisées",
    description: "et en croissance chaque mois",
    color: "text-primary",
    bg: "bg-blue-50",
    icon: "🏆",
  },
  {
    value: 45,
    suffix: "+",
    label: "Prestataires actifs",
    description: "vérifiés KYC & certifiés",
    color: "text-primary-light",
    bg: "bg-sky-50",
    icon: "👷",
  },
  {
    value: 24,
    suffix: "",
    label: "Communes couvertes",
    description: "à travers Kinshasa",
    color: "text-accent",
    bg: "bg-amber-50",
    icon: "📍",
  },
  {
    value: 4.7,
    suffix: "/5",
    label: "Note moyenne",
    description: "basée sur les avis clients",
    color: "text-success",
    bg: "bg-green-50",
    icon: "⭐",
  },
];

function CountUp({
  end,
  suffix,
  isDecimal = false,
}: {
  end: number;
  suffix: string;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, end);
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));

      if (step >= steps) {
        clearInterval(timer);
        setCount(end);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, end, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Label top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="badge bg-blue-50 text-primary border border-blue-100">
            Chiffres clés — mis à jour mensuellement
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${stat.bg} rounded-2xl p-6 text-center 
                         hover:shadow-lg transition-shadow duration-300
                         border border-white`}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className={`text-3xl md:text-4xl font-black font-heading 
                            ${stat.color} mb-1`}
              >
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.value % 1 !== 0}
                />
              </div>
              <p className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                {stat.label}
              </p>
              <p className="text-gray-400 text-xs">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 
                     pt-8 border-t border-gray-100"
        >
          {[
            { icon: "✅", text: "Devis gratuit sous 24h" },
            { icon: "🔒", text: "Paiement 100% sécurisé" },
            { icon: "📸", text: "Photos avant/après incluses" },
            { icon: "🔄", text: "Retravail sous 48h garanti" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
