import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';
import React from 'react';
import { web3Projects } from '../data/web3-projects';


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
      <script
    dangerouslySetInnerHTML={{
      __html: `
        !function(f,b,e,v,n,t,s){
          if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '642888295335656');
        fbq('track', 'PageView');
      `,
    }}
  />
  <noscript>
    <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=642888295335656&ev=PageView&noscript=1" />
  </noscript>
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
