import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MoveRight ,Code2, LineChart, Puzzle} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans overflow-hidden">
      {/* Hero - Style Apple */}
      <section className="w-full h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
          Zuterion Corp
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-xl text-gray-700 max-w-2xl">
          Design. Code. Scale.<br />L’agence qui transforme vos idées en produits digitaux élégants, performants et puissants.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8">
          <Button className="text-md px-6 py-3 flex items-center gap-2">
            Découvrir nos services <MoveRight size={18} />
          </Button>
        </motion.div>
      </section>

      {/* Illustration Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Image src="/illustration.svg" alt="Illustration" width={600} height={400} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Une vision digitale globale</h2>
            <p className="text-gray-700 text-lg">
              Nous combinons design, technologie et stratégie pour développer des produits numériques qui font la différence : web, mobile, IA, blockchain, UX/UI, marketing digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Nos Services</h2>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 text-left space-y-8">
            {/* Services Tech */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Code2 size={24} className="text-blue-600" />
                <h3 className="text-xl font-semibold">Services Tech</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm ml-1">
                <li>Développement Web (vitrine, e-commerce, frameworks)</li>
                <li>Développement Mobile (iOS, Android, PWA)</li>
                <li>Blockchain / Web3 (Smart Contracts, NFT, Wallets)</li>
                <li>UI/UX Design (Audit, wireframes, UI, Design system)</li>
                <li>Product Design & MVP</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>

            {/* Marketing Digital */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <LineChart size={24} className="text-green-600" />
                <h3 className="text-xl font-semibold">Marketing Digital</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm ml-1">
                <li>Stratégie digitale & branding</li>
                <li>SEO, SEA, campagnes Google/Bing Ads</li>
                <li>Social Media Marketing</li>
                <li>Emailing & CRM (Mailchimp, Hubspot…)</li>
                <li>Growth hacking & landing pages</li>
                <li>Analytics & suivi de performance</li>
              </ul>
            </div>

            {/* Bonus */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Puzzle size={24} className="text-purple-600" />
                <h3 className="text-xl font-semibold">Services Bonus</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm ml-1">
                <li>Formation & coaching digital</li>
                <li>Solutions No-code / Low-code (Webflow, Bubble…)</li>
                <li>UX Writing / Copywriting</li>
                <li>Accessibilité web (WCAG, RGAA)</li>
                <li>Design de présentation (pitch deck, slides…)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-8 py-20 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-12">Nos Réalisations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[{
            title: "Skool",
            desc: "Plateforme éducative connectant écoles, entreprises et étudiants.",
            image: "/skool.png",
            tag: "UX/UI + Dev + Éducation"
          }, {
            title: "Transfer Z",
            desc: "POC de transfert d'argent via stablecoins & mobile money.",
            image: "/transferz.png",
            tag: "Blockchain + IA"
          }, {
            title: "Project X",
            desc: "Outil collaboratif de gestion de projet visuelle.",
            image: "/projectx.png",
            tag: "Design + SaaS"
          }, {
            title: "Insight App",
            desc: "Dashboard analytique pour décision marketing et produit.",
            image: "/insight.png",
            tag: "Analytics + React"
          }].map((item, index) => (
            <motion.div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }}>
              <Image src={item.image} alt={item.title} width={400} height={240} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{item.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-20 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-12">Ce qu'ils disent de nous</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{
            name: "Aminata K.",
            company: "CEO - Startup ÉduTech",
            message: "Zuterion Corp nous a aidé à concrétiser notre plateforme éducative. Une équipe à l'écoute, créative et très professionnelle !",
            avatar: "/avatar1.jpg"
          }, {
            name: "Jean-Paul T.",
            company: "Cofondateur - Fintech Africa",
            message: "Grâce à leur expertise blockchain, nous avons pu créer une solution de transfert innovante en un temps record.",
            avatar: "/avatar2.jpg"
          }, {
            name: "Isabelle M.",
            company: "CMO - App Santé",
            message: "Design épuré, ergonomie parfaite, et une équipe toujours réactive. Je recommande les yeux fermés.",
            avatar: "/avatar3.jpg"
          }].map((t, i) => (
            <motion.div key={i} className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: i * 0.2 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-4">
                <Image src={t.avatar} alt={t.name} width={48} height={48} className="rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">“{t.message}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 text-center bg-white">
        <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-semibold mb-6">
          Prêt à créer quelque chose d’unique ?
        </motion.h3>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Button className="text-md px-6 py-3">Discutons ensemble</Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 px-6 bg-gray-100 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zuterion Corp. Tous droits réservés.
      </footer>
    </main>
  );
}
