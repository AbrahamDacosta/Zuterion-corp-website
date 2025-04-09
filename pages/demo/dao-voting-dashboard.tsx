import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function DAOVotingDashboardPage() {
  return (
    <>
      <Head>
        <title>DAO Voting Dashboard | Projet Web3 - Zuterion Corp</title>
        <meta name="description" content="Dashboard de vote pour DAO avec interface intuitive et smart contracts. Un projet signé Zuterion Corp." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">📊 DAO Voting Dashboard</h1>
        <p className="text-gray-700 text-lg mb-4">
          Un dashboard Web3 dédié à la gestion de votes pour organisations autonomes décentralisées (DAO), avec retour en temps réel.
        </p>

        <Image
          src="/demo-dao1.png"
          alt="Aperçu DAO Dashboard"
          width={800}
          height={400}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="text-gray-600 mb-6">
          L’objectif : simplifier l’adoption des DAO grâce à une interface claire et un système de vote transparent, sécurisé et auditable.
        </p>

        <ul className="text-left text-gray-700 mb-6 list-disc list-inside max-w-2xl mx-auto">
          <li>✅ Interface de vote claire et responsive</li>
          <li>✅ Connexion Wallet & accès membres</li>
          <li>✅ Enregistrement on-chain des votes</li>
          <li>✅ Visualisation des résultats en direct</li>
        </ul>

        <Link href="https://zuterion-corp-website.onrender.com/demo/dao-vote" target="_blank">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Voir la démo live
          </button>
        </Link>
      </main>
    </>
  );
}
