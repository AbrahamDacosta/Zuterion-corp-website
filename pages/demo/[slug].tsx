// pages/demo/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { web3Projects, Web3Project } from '../../data/web3-projects';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactQuickForm from '../../components/ContactQuickForm';

interface Props {
  project: Web3Project;
}

export default function ProjectDetail({ project }: Props) {
  const [openForm, setOpenForm] = useState(false);

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
        <title>{project.title} | Démo Web3</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {project.title}
        </motion.h1>

        <motion.p className="text-gray-600 text-lg mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
          {project.description}
        </motion.p>

        <motion.div className="relative w-full h-64 mb-8" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <Image src={project.image} alt={project.title} fill className="object-cover rounded-xl" />
        </motion.div>

        <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
          <h2 className="text-xl font-semibold mb-2">Technologies utilisées :</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span key={i} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p className="text-gray-800 leading-relaxed mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
          {project.content}
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
          <button
            onClick={() => setOpenForm(true)}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Demander une démo
          </button>
        </motion.div>

        <ContactQuickForm
          isOpen={openForm}
          onClose={() => setOpenForm(false)}
          projectName={project.title}
        />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = web3Projects.map((proj) => ({ params: { slug: proj.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = web3Projects.find((p) => p.slug === params?.slug);
  if (!project) {
    return { notFound: true };
  }
  const { content, ...serializableProject } = project;
  return {
    props: {
      project: {
        ...serializableProject,
        content: null, // temporaire pour ne pas casser l’export
      },
    },
  };
};
