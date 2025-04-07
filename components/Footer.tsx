import React from 'react';
import NewsletterForm from '../components/NewsletterForm';



export default function Footer() {
  return (
    <footer className="w-full py-6 px-8 bg-gray-100 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Zuterion Corp. Tous droits réservés.
    </footer>
  );
}
<NewsletterForm />