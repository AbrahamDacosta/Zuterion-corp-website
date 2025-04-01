import React from 'react';

export default function ServicesPage() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Nos Services</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <p>
          Chez <strong>Zuterion Corp</strong>, nous combinons expertise technique, design centré utilisateur et vision produit pour vous offrir des services sur mesure :
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Développement Web & Mobile</strong> : React, Next.js, React Native, APIs modernes</li>
          <li><strong>Applications Blockchain</strong> : Smart contracts, wallets, dApps</li>
          <li><strong>Solutions IA</strong> : Chatbots, automatisation, modèles sur mesure</li>
          <li><strong>UI/UX Design</strong> : Wireframes, maquettes interactives, design systems</li>
          <li><strong>Études de marché & marketing digital</strong> : Benchmark, stratégie, growth</li>
        </ul>
      </div>
    </main>
  );
}
