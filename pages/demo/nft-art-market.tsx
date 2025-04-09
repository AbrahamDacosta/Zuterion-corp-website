import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NFTArtMarketPage() {
  return (
    <>
      <Head>
        <title>NFT Art Market | Projet Web3 - Zuterion Corp</title>
        <meta name="description" content="Plateforme de mint et vente de NFTs avec Thirdweb et Next.js. Un projet signé Zuterion Corp." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">🖼️ NFT Art Market</h1>
        <p className="text-gray-700 text-lg mb-4">
          Une plateforme moderne de création (mint), gestion et vente de NFTs construite avec Thirdweb & Next.js.
        </p>

        <Image
          src="/demo-nft1.png"
          alt="Aperçu NFT Marketplace"
          width={800}
          height={400}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="text-gray-600 mb-6">
          Le but de ce projet est de proposer une expérience fluide pour les artistes et collectionneurs Web3.
          Intégration wallet, smart contracts personnalisés, mint NFTs, et gestion de profil décentralisée sont au cœur de ce projet.
        </p>

        <ul className="text-left text-gray-700 mb-6 list-disc list-inside max-w-2xl mx-auto">
          <li>✅ Développement Web3 avec Thirdweb</li>
          <li>✅ Connexion via Metamask</li>
          <li>✅ Smart contract personnalisé pour mint et listing</li>
          <li>✅ Intégration UI/UX avec Tailwind & React</li>
        </ul>

        <Link href="https://zuterion-corp-website.onrender.com/demo/nft-marketplace" target="_blank">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Voir la démo live
          </button>
        </Link>
      </main>
    </>
  );
}
