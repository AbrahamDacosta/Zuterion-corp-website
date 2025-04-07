import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // WhatsApp Button (GetButton.io)
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

    // Tidio Chatbot Script
    const tidioScript = document.createElement("script");
    tidioScript.src = "//code.tidio.co/qnzypp9povexuikpfdv9nongkr6nxl6c.js"; // Remplacez par votre identifiant Tidio
    tidioScript.async = true;
    document.body.appendChild(tidioScript);
  }, []);

  return (
    <>
      <Head>
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NQD2WCR8EF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NQD2WCR8EF');
            `,
          }}
        />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon-180x180.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <meta name="theme-color" content="#1472F9" />

           {/* Rich Snippet - JSON-LD */}
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
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
