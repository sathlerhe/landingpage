import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { setConfiguration } from "react-grid-system";

setConfiguration({
  containerWidths: [540, 740, 960, 1140, 1250, 1540],
  breakpoints: [576, 768, 992, 1200, 1280, 1600],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/favicon.ico"
        ></link>
        <title>LandingPage - Imobiliárias</title>
      </Head>
      <div className="root">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
