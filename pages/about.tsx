import React from 'react';

export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">À propos de Zuterion Corp</h1>
      <p className="text-lg text-gray-700 mb-6">
        Zuterion Corp est une agence digitale 360° née de la passion pour la technologie, le design et l'impact.
        Nous croyons en des solutions intelligentes, accessibles et centrées utilisateur.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Depuis 2021, nous accompagnons des startups, PME et projets innovants dans la création de produits performants
        en mettant l’humain, la clarté et l’innovation au cœur de notre approche.
      </p>
      <ul className="list-disc list-inside text-gray-700 text-lg">
        <li>Approche sur mesure et agile</li>
        <li>Esprit startup & exigence qualité</li>
        <li>Vision produit et accompagnement global</li>
      </ul>
    </main>
  );
}
