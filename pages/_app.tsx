import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { CartProvider } from '../src/context/CartContext'; // <- Bien corrigé ici
import CartCounter from '@/components/CartCounter';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Bouton WhatsApp (GetButton.io)
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function () {
        var options = {
          whatsapp: "+2250787785170",
          call_to_action: "Besoin d’aide ? Écrivez-nous 💬",
          position: "right",
          button_color: "#1d4ed8",
          order: "whatsapp",
          pre_filled_message: "Bonjour l’équipe Zuterion, j’ai une question 😊"
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
      })();
    `;
    document.body.appendChild(script);

    // Chatbot Tidio
    const tidioScript = document.createElement("script");
    tidioScript.src = "//code.tidio.co/qnzypp9povexuikpfdv9nongkr6nxl6c.js";
    tidioScript.async = true;
    document.body.appendChild(tidioScript);
  }, []);

  return (
    <CartProvider> {/* 🚀 On englobe tout ici */}
      <>
        <Head>
          {/* Facebook Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){
                  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '642888295335656');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=642888295335656&ev=PageView&noscript=1" />
          </noscript>

          {/* Google Analytics */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXX');
            `}
          </Script>

          {/* SEO basique */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon-180x180.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <meta name="theme-color" content="#1472F9" />

          {/* Rich Snippets pour SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Zuterion Corp",
                "url": "https://zuterion-corp-website.onrender.com",
                "logo": "https://zuterion-corp-website.onrender.com/favicons/favicon-512x512.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+2250787785170",
                  "contactType": "customer support",
                  "areaServed": "CI",
                  "availableLanguage": ["fr", "en"]
                },
                "sameAs": [
                  "https://www.linkedin.com/in/abrahamdacosta",
                  "https://twitter.com/abrahamdacosta",
                  "https://github.com/AbrahamDacosta"
                ]
              }`
            }}
          />
        </Head>

        {/* Navbar + page */}
        <Navbar />
        <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-xl font-bold">Mon E-Book Store</h1>
        <CartCounter />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      </>
    </CartProvider>
  );
}
