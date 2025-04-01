import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar' // <-- import du composant

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar /> {/* <-- affichage en haut de toutes les pages */}
      <Component {...pageProps} />
    </>
  )
}
