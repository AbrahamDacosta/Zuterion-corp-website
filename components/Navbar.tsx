import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "../src/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full h-16 px-6 shadow-sm bg-white sticky top-0 z-50 flex items-center justify-between">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Zuterion Logo"
              width={200}
              height={100}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-sm text-gray-700 hover:text-black">À propos</Link>
            <Link href="/services/tech" className="text-sm text-gray-700 hover:text-black">Services Tech</Link>
            <Link href="/services/marketing" className="text-sm text-gray-700 hover:text-black">Marketing Digital</Link>
            <Link href="/services/bonus" className="text-sm text-gray-700 hover:text-black">Bonus</Link>
            <Link href="/web3" className="text-sm text-gray-700 hover:text-black">Web3</Link>
            <Link href="/blog" className="text-sm text-gray-700 hover:text-black">Blog</Link>
            <Link href="/ebooks" className="text-sm text-gray-700 hover:text-black">eBooks</Link>
            <Link href="/contact" className="text-sm text-gray-700 hover:text-black">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Panier */}
            <Link href="/cart" className="relative flex items-center">
              🛒
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Menu Hamburger Mobile */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4 z-40">
            <Link href="/about" onClick={() => setOpen(false)} className="text-gray-700 hover:text-black text-lg">À propos</Link>
            <Link href="/services/tech" onClick={() => setOpen(false)} className="text-gray-700 hover:text-black text-lg">Services Tech</Link>
            <Link href="/services/marketing" onClick={() => setOpen(false)} className="text-gray-700 hover:text-black text-lg">Marketing Digital</Link>
            <Link href="/services/bonus" onClick={() => setOpen(false)} className="text-gray-700 hover:text-black text-lg">Bonus</Link>
            <Link href="/web3" onClick={() => setOpen(false)} className="text-gray-700 hover:text-black text-lg">Web3</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="text-gray-700 hover:text-black text-lg">Blog</Link>
            <Link href="/ebooks" onClick={() => setOpen(false)} className="text-gray-700 hover:text-black text-lg">eBooks</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="text-gray-700 hover:text-black text-lg">Contact</Link>
          </div>
        )}
      </header>
    </>
  );
}
