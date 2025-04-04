import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import * as FaIcons from 'react-icons/fa';
import Head from 'next/head';

const FaLinkedin = FaIcons.FaLinkedin as React.ComponentType;
const FaGithub = FaIcons.FaGithub as React.ComponentType;
const FaTwitter = FaIcons.FaTwitter as React.ComponentType;
const FaDownload = FaIcons.FaDownload as React.ComponentType;


export default function AboutPage() {
  return (
    <><Head>
          <title>À propos | Zuterion Corp</title>
          <meta name="description" content="Découvrez le parcours du fondateur de Zuterion Corp, son engagement dans l'innovation digitale, et la mission de l'agence." />

          {/* Open Graph pour réseaux sociaux */}
          <meta property="og:title" content="Zuterion Corp | Développement & Design Digital" />
          <meta property="og:description" content="Agence digitale innovante spécialisée en développement Web, mobile, blockchain et design UX/UI." />
          <meta property="og:image" content="/og-zuterion.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zuterion-corp.onrender.com" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zuterion Corp | Développement & Design Digital" />
          <meta name="twitter:description" content="Agence digitale innovante spécialisée en développement Web, mobile, blockchain et design UX/UI." />
          <meta name="twitter:image" content="/og-zuterion.jpg" />
      </Head><main className="min-h-screen bg-white text-black font-sans overflow-hidden"></main><main className="min-h-screen px-6 py-24 bg-white text-black">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-left"
                  >
                      <h1 className="text-4xl font-bold mb-4">À propos de moi</h1>
                      <p className="text-gray-700 mb-4">
                          Je suis Abraham Dacosta, entrepreneur passionné par la technologie, l'innovation et l'impact social. Depuis 2021, je me consacre à la création de solutions digitales qui transforment les usages et accompagnent les visions ambitieuses.
                      </p>
                      <p className="text-gray-700 mb-4">
                          Mon aventure a commencé avec <strong>Team Meet</strong>, un projet visant à rendre les entreprises plus transparentes vis-à-vis de l’extérieur. Cette première expérience a été un tremplin vers <strong>Skool</strong>, une plateforme de mise en relation entre écoles, entreprises et étudiants. Grâce à ce projet, j’ai remporté plusieurs prix, dont :
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-4">
                          <li>🏆 1er prix au concours de pitch de l’Entrepreneur lors du Forum Économique de l’Afrique de l’Ouest</li>
                          <li>🎯 5e finaliste du concours Moov Solution</li>
                          <li>🥉 3e prix du concours POESAM d'Orange Côte d'Ivoire (avec 1 million FCFA à la clé)</li>
                      </ul>
                      <p className="text-gray-700 mb-4">
                          En parallèle, j’ai acquis une solide expérience dans la fintech à travers des rôles techniques et analytiques chez <strong>Djamo</strong>, <strong>Magma</strong> et <strong>Cinetpay</strong>, où j’ai contribué au support technique, à l’analyse des revenus et au développement de solutions internes.
                      </p>
                      <p className="text-gray-700 mb-6">
                          Aujourd’hui, avec <strong>Zuterion Corp</strong>, j’ai pour ambition de bâtir une agence digitale qui combine technologie, design et stratégie pour accompagner les startups, PME et grandes structures dans leur transformation numérique.
                      </p>

                      <div className="flex gap-6 items-center">
                          <Link href="https://www.linkedin.com/in/therealabrahamdacosta/" target="_blank" className="text-blue-600 hover:text-blue-800 text-xl">
                              <FaLinkedin />
                          </Link>
                          <Link href="https://github.com/AbrahamDacosta" target="_blank" className="text-gray-800 hover:text-black text-xl">
                              <FaGithub />
                          </Link>
                          <Link href="https://x.com/AbrahamDaCost12" target="_blank" className="text-blue-400 hover:text-blue-600 text-xl">
                              <FaTwitter />
                          </Link>
                          <Link href="/AbrahamDacostaCV.pdf" target="_blank" className="text-sm flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100">
                              <FaDownload /> Télécharger le CV
                          </Link>
                      </div>
                  </motion.div>

                  <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex justify-center"
                  >
                      <div className="rounded-2xl overflow-hidden shadow-xl w-80 h-80 md:w-96 md:h-96 relative border-4 border-blue-500 hover:border-indigo-600 hover:shadow-2xl transition duration-300">
                          <Image
                              src="/abraham2.jpeg"
                              alt="Abraham Dacosta"
                              layout="fill"
                              objectFit="cover"
                              className="rounded-2xl" />
                      </div>
                  </motion.div>
              </div>
          </main></>
  );
}
