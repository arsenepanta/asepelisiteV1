export default function FAQHero() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
          ❓ Questions fréquentes
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tout ce que vous voulez{" "}
          <span className="text-yellow-400">savoir sur ASEPELI</span>
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Trouvez rapidement les réponses à vos questions. Si vous ne trouvez
          pas, notre équipe répond en moins de 30 minutes.
        </p>
      </div>
    </section>
  );
}
