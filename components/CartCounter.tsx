// components/CartCounter.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function CartCounter() {
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.length);

    window.addEventListener('cartUpdated', () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(updatedCart.length);
    });

    return () => {
      window.removeEventListener('cartUpdated', () => {});
    };
  }, []);

  return (
    <div className="relative flex items-center gap-4">
      <div className="relative inline-block cursor-pointer" onClick={() => router.push('/cart')}>
        <span className="text-2xl">🛒</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs">
            {cartCount}
          </span>
        )}
      </div>
      <button
        onClick={() => router.push('/cart')}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm"
      >
        Voir le panier
      </button>
    </div>
  );
}
