// data/web3-projects.ts
export interface Web3Project {
    slug: string;
    title: string;
    description: string;
    stack: string[];
    image: string;
    content: string;
    demoUrl: string;
  }
  
  export const web3Projects: Web3Project[] = [
    {
      slug: 'nft-art-market',
      title: 'NFT Art Market',
      description: 'Plateforme de mint et vente de NFTs avec Thirdweb et Next.js.',
      stack: ['Solidity', 'Thirdweb', 'Next.js'],
      image: '/demo-nft.jpg',
      demoUrl: '/demo/nft-art-market',
      content: 'Ce projet permet aux utilisateurs de créer, afficher et vendre des NFTs. Il utilise Thirdweb pour les smart contracts, Next.js pour le frontend, et Tailwind CSS pour le design. Une passerelle vers l’avenir de la création numérique.'
    },
    {
      slug: 'connect2earn',
      title: 'Connect2Earn',
      description: 'App Web3 avec connexion wallet, récupération de soldes, et interactions on-chain.',
      stack: ['wagmi', 'Ethers.js', 'Tailwind'],
      image: '/demo-wallet.jpg',
      demoUrl: '/demo/connect2earn',
      content: 'Connect2Earn permet aux utilisateurs de connecter leur portefeuille crypto, de suivre leurs actifs en temps réel et d’interagir avec des contrats intelligents. Parfait pour les dApps d’engagement et de récompenses.'
    },
    {
      slug: 'dao-voting-dashboard',
      title: 'DAO Voting Dashboard',
      description: 'Dashboard d’administration et vote DAO en temps réel.',
      stack: ['Solidity', 'React', 'Smart Contracts'],
      image: '/demo-dao.jpg',
      demoUrl: '/demo/dao-voting-dashboard',
      content: 'Cette interface permet aux membres d’une DAO de soumettre des propositions, de voter en ligne, et de suivre les décisions communautaires. Basée sur Ethereum et pensée pour la gouvernance transparente.'
    }
  ];
  