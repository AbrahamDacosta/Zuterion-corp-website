import React from 'react';
import Image from 'next/image';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { MoveRight ,Code2, LineChart, Puzzle} from 'lucide-react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import NewsletterForm from '../components/NewsletterForm';
import Link from 'next/dist/client/link';
import { sanity } from '../lib/sanity';
import { urlFor } from '@/lib/image'
import SanityImage from '@/components/SanityImage'


export async function getStaticProps() {
 const posts = await sanity.fetch(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    publishedAt,
    slug { current },
    category->{ title, slug { current } },
    coverImage
  }
`)
;

  return { props: { posts } };
}



export default function Home({ posts }) {
  return (
    <><Head>
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
      <link rel="icon" href="/favicon.ico" />
      <meta name="google-site-verification" content="DcWF_ZhBVHCxyXEpyNR2--9Te4tog10P_V4t2peVdoI" />
      <title>Zuterion Corp | Développement & Design Digital</title>
      <meta name="description" content="Agence digitale innovante spécialisée en développement Web, mobile, blockchain et design UX/UI. Basée en Côte d’Ivoire." />

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
    </Head><main className="min-h-screen bg-white text-black font-sans overflow-hidden">
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

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">📰 Derniers articles du blog</h2>
              <Link href="/blog" className="text-blue-600 text-sm font-medium hover:underline">
                Voir tous les articles →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                  {post.coverImage && (
                    <SanityImage
                      image={post.coverImage}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="rounded mb-3 h-40 w-full object-cover"
                    />
                  )}
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-700">{post.excerpt}</p>
                </Link>
              ))}
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

        <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">🚀 Nos projets Web3</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Découvrez comment nous utilisons la blockchain pour créer des solutions innovantes : NFT, DAO, dApps connectées...
        </p>
        <Link
          href="/web3"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Voir les projets Web3
        </Link>
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
        <NewsletterForm />  
        {/* Footer */}
        <footer className="w-full py-6 px-6 bg-gray-100 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zuterion Corp. Tous droits réservés.
        </footer>
      </main></>
  );
}

