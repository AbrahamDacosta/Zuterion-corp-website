// components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  stack: string[];
  slug:string;
  demoLink: string;
  image: string;
}

export default function ProjectCard({ title, description, stack,slug , image }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300"
    >
      <div className="h-52 relative overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover scale-100 hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link href={`/demo/${slug}`} className="...">En savoir plus</Link>

      </div>
    </motion.div>
  );
}
