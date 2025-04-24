// src/pages/studio.tsx
import dynamic from 'next/dynamic'
import config from '../sanity.config' // Assure-toi du chemin

const Studio = dynamic(() => import('sanity').then((mod) => mod.Studio), {
  ssr: false, // Désactive le SSR pour éviter le crash avec framer-motion
})

export default function StudioPage() {
  return <Studio config={config} />
}
