import React from 'react';

export default function PortfolioPage() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Nos Réalisations</h1>
      <p className="text-lg text-gray-700 mb-8">
        Voici quelques exemples de projets que nous avons réalisés ou accompagnés, mêlant design, développement et stratégie.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Skool</h2>
          <p className="text-gray-600 text-sm mb-2">Plateforme de mise en relation entre étudiants, écoles et entreprises.</p>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">UX/UI + Développement + Pitch</span>
        </div>

        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Transfer Z</h2>
          <p className="text-gray-600 text-sm mb-2">POC d'une solution de transfert d’argent via stablecoins & mobile money.</p>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Blockchain + IA + MVP</span>
        </div>
      </div>
    </main>
  );
}
