// pages/cart.tsx
import { useEffect, useState } from 'react';

interface Ebook {
  id: number;
  title: string;
  price: number;
  cover: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<Ebook[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const validateOrder = () => {
    if (cart.length === 0) return;
  
    const message = cart.map(item => `📚 ${item.title} - ${item.price} FCFA`).join('\n');
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  
    // Collecte un prénom ou email avant validation
    const clientName = prompt("Entrez votre prénom ou email pour la commande :");
  
    if (!clientName) {
      alert("Commande annulée : aucun prénom ou email fourni.");
      return;
    }
  
    // Message WhatsApp final avec prénom/email
    const finalMessage = `Bonjour, je souhaite commander les ebooks suivants :\n\n${message}\n\n💰 Total : ${totalPrice} FCFA\n\n👤 Client : ${clientName}\n\nMerci !`;
  
    const encodedMessage = encodeURIComponent(finalMessage);
  
    // Numéro WhatsApp du vendeur (remplacer par ton numéro réel)
    const whatsappNumber = "2250787785170"; // Côte d'Ivoire +225
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
    // Demande confirmation avant redirection
    const confirmation = confirm("Vous allez être redirigé vers WhatsApp pour finaliser votre commande. Continuer ?");
  
    if (confirmation) {
      // Nettoyer le panier
      localStorage.removeItem('cart');
      window.dispatchEvent(new Event('cartUpdated'));
  
      // Rediriger vers WhatsApp
      window.location.href = whatsappLink;
    } else {
      alert("Commande annulée.");
    }
  };
  

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Votre Panier 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="flex items-center gap-6 border-b pb-4">
                <img src={item.cover} alt={item.title} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">{item.price} FCFA</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-2xl font-bold">Total : {totalPrice} FCFA</p>
            <button
              onClick={validateOrder}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Valider la commande
            </button>
          </div>
        </>
      )}
    </main>
  );
}
