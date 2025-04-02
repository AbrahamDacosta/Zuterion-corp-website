import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
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
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
