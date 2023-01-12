import React from "react";
import type { AppProps } from "next/app";
import { NativeBaseProvider, extendTheme } from "native-base";
import Head from "next/head";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const customTheme = extendTheme({ config });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>daviswhitehead.com</title>
        <meta name="description" content="Davis Whitehead's website." />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <NativeBaseProvider isSSR theme={customTheme}>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </>
  );
}

export default MyApp;
