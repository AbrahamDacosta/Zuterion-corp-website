import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Connect2EarnPage() {
  return (
    <>
      <Head>
        <title>Connect2Earn | Projet Web3 - Zuterion Corp</title>
        <meta name="description" content="App Web3 intuitive avec connexion wallet et interactions blockchain. Un projet signé Zuterion Corp." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">🔗 Connect2Earn</h1>
        <p className="text-gray-700 text-lg mb-4">
          Une application Web3 permettant aux utilisateurs de connecter leur wallet, visualiser leurs soldes, et interagir avec la blockchain en temps réel.
        </p>

        <Image
          src="/demo-wallet1.png"
          alt="Aperçu Connect2Earn"
          width={800}
          height={400}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="text-gray-600 mb-6">
          Pensée pour les utilisateurs débutants comme avancés, Connect2Earn offre une interface claire et une architecture sécurisée.
        </p>

        <ul className="text-left text-gray-700 mb-6 list-disc list-inside max-w-2xl mx-auto">
          <li>✅ Connexion via Metamask</li>
          <li>✅ Affichage des soldes ERC-20</li>
          <li>✅ Récupération on-chain des données</li>
          <li>✅ UX simple et responsive</li>
        </ul>

        <Link href="https://zuterion-corp-website.onrender.com/demo/connect2earn" target="_blank">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Voir la démo live
          </button>
        </Link>
      </main>
    </>
  );
}
