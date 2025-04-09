// data/web3-projects.tsx
import React from 'react';
import { ReactNode } from 'react';

export interface Web3Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  demoUrl: string;
  content: ReactNode;
}

export const web3Projects: Web3Project[] = [
  {
    slug: 'nft-art-market',
    title: 'NFT Art Market',
    description: 'Plateforme de mint et vente de NFTs avec Thirdweb.',
    image: '/demo-nft1.png',
    demoUrl: 'https://zuterion-corp-website.onrender.com/demo/nft-art-market',
    stack: ['Solidity', 'Next.js', 'Thirdweb'],
    content: (
      <>
        <p className="mb-4">
          Ce projet permet aux créateurs de <strong>générer et vendre des NFTs</strong> sur leur propre plateforme,
          sans passer par OpenSea.
        </p>
        <h3 className="text-xl font-semibold mb-2">Fonctionnalités clés :</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-700">
          <li>Mint & affichage de NFTs</li>
          <li>Connexion wallet (MetaMask, Coinbase Wallet...)</li>
          <li>Déploiement de smart contracts avec Thirdweb</li>
        </ul>
        <p className="mb-4">
          Ce projet a été conçu pour être un <strong>MVP rapide</strong> utilisable par des artistes ou studios indépendants.
        </p>
      </>
    )
  },
  {
    slug: 'connect2earn',
    title: 'Connect2Earn',
    description: 'App Web3 avec connexion wallet, suivi de soldes et interactions on-chain.',
    image: '/demo-wallet1.png',
    demoUrl: 'https://zuterion-corp-website.onrender.com/demo/connect2earn',
    stack: ['wagmi', 'Ethers.js', 'Tailwind'],
    content: (
      <>
        <p className="mb-4">
          Connect2Earn est une application Web3 permettant aux utilisateurs de <strong>connecter leur wallet</strong> (MetaMask, WalletConnect, etc.) et de voir leurs soldes en temps réel.
        </p>
        <h3 className="text-xl font-semibold mb-2">Fonctionnalités incluses :</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-700">
          <li>Connexion Ethereum & récupération d’adresse</li>
          <li>Lecture de soldes on-chain (ETH, tokens)</li>
          <li>Interactions simples avec des contrats (send, vote...)</li>
        </ul>
        <p>
          Idéale pour les apps de <strong>reward, gamification</strong> ou portails utilisateurs blockchain.
        </p>
      </>
    )
  },
  {
    slug: 'dao-voting-dashboard',
    title: 'DAO Voting Dashboard',
    description: 'Dashboard d’administration pour votes DAO en temps réel.',
    image: '/demo-dao1.png',
    demoUrl: 'https://zuterion-corp-website.onrender.com/demo/dao-voting-dashboard',
    stack: ['Solidity', 'React', 'Smart Contracts'],
    content: (
      <>
        <p className="mb-4">
          Le <strong>DAO Voting Dashboard</strong> permet de gérer la gouvernance d’une communauté via des propositions et votes en ligne.
        </p>
        <h3 className="text-xl font-semibold mb-2">Ce que propose cette interface :</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-700">
          <li>Création de propositions de vote</li>
          <li>Vote en temps réel via smart contracts</li>
          <li>Dashboard de suivi des décisions prises</li>
        </ul>
        <p>
          L’outil parfait pour les <strong>DAO</strong> souhaitant une interface simple et transparente pour piloter leur communauté.
        </p>
      </>
    )
  }
];
