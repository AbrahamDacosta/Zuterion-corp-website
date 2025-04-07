import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    slug: 'nft-art-market',
    title: 'NFT Art Market',
    description: 'Plateforme de mint et vente de NFTs avec Thirdweb et Next.js.',
    stack: ['Solidity', 'Thirdweb', 'Next.js'],
    image: '/demo-nft.png'
  },
  {
    slug: 'connect2earn',
    title: 'Connect2Earn',
    description: 'App Web3 avec connexion wallet, récupération de soldes, et interactions on-chain.',
    stack: ['wagmi', 'Ethers.js', 'Tailwind'],
    image: '/demo-wallet.png'
  },
  {
    slug: 'dao-voting-dashboard',
    title: 'DAO Voting Dashboard',
    description: 'Dashboard d’administration et vote DAO en temps réel.',
    stack: ['Solidity', 'React', 'Smart Contracts'],
    image: '/demo-dao.png'
  }
];

export default function Web3Projects() {
  return (
    <>
      <Head>
        <title>Projets Web3 | Zuterion Corp</title>
        <meta name="description" content="Découvrez nos projets Web3 : NFT, DAO, dApps connectées, et plus." />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Projets Web3 🚀</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <ProjectCard
                  key={index}
                  title={proj.title}
                  description={proj.description}
                  stack={proj.stack}
                  slug={proj.slug}
                  image={proj.image} demoLink={''}            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg font-medium">Vous avez un projet Web3 en tête ?</p>
          <Link href="/contact" className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            Discutons-en
          </Link>
        </div>
      </main>
    </>
  );
}
