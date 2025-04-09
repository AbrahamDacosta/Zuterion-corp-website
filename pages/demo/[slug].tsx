// pages/demo/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { web3Projects, Web3Project } from '../../data/web3-projects';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  project: Web3Project;
}

export default function ProjectDetail({ project }: Props) {
  return (
    <>
      <Head>
        <title>{project.title} | Démo Web3</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="relative w-full h-64 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Image src={project.image} alt={project.title} fill className="object-cover rounded-xl" />
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-2">Technologies utilisées :</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="text-gray-800 leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {project.content}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href={project.demoUrl}
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Accéder à la démo
          </Link>
        </motion.div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = web3Projects.map((proj) => ({ params: { slug: proj.slug } }));
  console.log('Generated paths:', paths); // 👈 debug
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = web3Projects.find((proj) => proj.demoUrl === params?.demoUrl);
  return {
    props: { project }
  };
};
