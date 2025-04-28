// pages/ebooks/[slug].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ebooks from '../../data/ebooks.json';

export default function EbookDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const [ebook, setEbook] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      const foundEbook = ebooks.find((e) => e.slug === slug);
      setEbook(foundEbook);
    }
  }, [slug]);

  const addToCart = () => {
    if (!ebook) return;
  
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(ebook);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Ajouter un événement pour mettre à jour le compteur
    window.dispatchEvent(new Event('cartUpdated'));
  
    alert('Ajouté au panier 🛒');
  };
  

  if (!ebook) return <p className="text-center mt-20">Chargement...</p>;

  return (
    <main className="max-w-3xl mx-auto p-8">
      <img src={ebook.cover} alt={ebook.title} className="rounded mb-6 w-full h-80 object-cover" />
      <h1 className="text-3xl font-bold mb-2">{ebook.title}</h1>
      <p className="text-gray-600 mb-4">{ebook.description}</p>
      <p className="text-2xl font-bold mb-6">{ebook.price} FCFA</p>
      <button
        onClick={addToCart}
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Ajouter au panier
      </button>
    </main>
  );
}
