import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "../src/context/CartContext"

export default function Navbar() {
  const { cart } = useCart()
  const [open, setOpen] = useState(false);

  return (
    
    <><header className="w-full h-16 px-6 shadow-sm bg-white sticky top-0 z-96 flex items-center">
        
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <Link href="/">
          <Image src="/logo.png" alt="Zuterion Logo" width={200} height={100} className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/about" className="text-sm text-gray-700 hover:text-black">À propos</Link>
          <Link href="/services/tech" className="text-sm text-gray-700 hover:text-black">Services Tech</Link>
          <Link href="/services/marketing" className="text-sm text-gray-700 hover:text-black">Marketing Digital</Link>
          <Link href="/services/bonus" className="text-sm text-gray-700 hover:text-black">Bonus</Link>
          <Link href="/web3">Web3</Link>
          <Link href="/blog" className="text-sm text-gray-700 hover:text-black">Blog</Link>
          <Link href="/ebooks" className="text-sm text-gray-700 hover:text-black">eBooks</Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:text-black">Contact</Link>


        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden mt-4 space-y-4 px-4 pb-4">
          <Link href="/about" className="block text-sm text-gray-700 hover:text-black">À propos</Link>
          <Link href="/services/tech" className="block text-sm text-gray-700 hover:text-black">Services Tech</Link>
          <Link href="/services/marketing" className="block text-sm text-gray-700 hover:text-black">Marketing Digital</Link>
          <Link href="/services/bonus" className="block text-sm text-gray-700 hover:text-black">Bonus</Link>
          <Link href="/web3" className="block text-sm text-gray-700 hover:text-black">Web3</Link>
          <Link href="/blog/index">Blog</Link>
          <Link href="/ebooks" className="text-sm text-gray-700 hover:text-black">eBooks</Link>
          <Link href="/contact" className="block text-sm text-gray-700 hover:text-black">Contact</Link>
        </div>
      )}
      {/* Panier */}
      <Link href="/cart" className="relative flex items-center">
          🛒
          <span className="ml-2 text-sm font-medium">{cart.length}</span>
        </Link>
    </header>
      
      </>
  );

}
