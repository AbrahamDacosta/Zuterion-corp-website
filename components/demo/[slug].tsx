// pages/demo/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { web3Projects, Web3Project } from '../../data/web3-projects';
import Link from 'next/link';
import React from 'react';

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
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 text-lg mb-6">{project.description}</p>

        <div className="relative w-full h-64 mb-8">
          <Image src={project.image} alt={project.title} fill className="object-cover rounded-xl" />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Technologies utilisées :</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span key={i} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-800 leading-relaxed mb-10">{project.content}</p>

        <Link
          href={project.demoUrl}
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Accéder à la démo
        </Link>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = web3Projects.map((proj) => ({ params: { slug: proj.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = web3Projects.find((proj) => proj.slug === params?.slug);
  return {
    props: { project }
  };
};
