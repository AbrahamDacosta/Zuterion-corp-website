// pages/ebooks/index.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ebooks from '../../data/ebooks.json';

const fakeEbooks = [
  { id: 1, title: "Créer un site Web de A à Z", slug: "site-web-de-a-a-z", price: 9900, cover: "/covers/siteweb.jpg" },
  { id: 2, title: "Lancer son app mobile", slug: "app-mobile", price: 14900, cover: "/covers/appmobile.jpg" },
];

export default function EbookIndex() {
    return (
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">📚 Nos eBooks</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {ebooks.map((ebook) => (
            <div key={ebook.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={ebook.cover} alt={ebook.title} className="rounded mb-4 h-60 object-cover w-full" />
              <h2 className="text-xl font-semibold mb-2">{ebook.title}</h2>
              <p className="text-lg font-bold mb-4">{ebook.price} FCFA</p>
              <Link href={`/ebooks/${ebook.slug}`} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Voir
              </Link>
            </div>
          ))}
        </div>
      </main>
    );
  }
  