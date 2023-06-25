import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { NativeBaseProvider, extendTheme } from "native-base";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { GA_MEASUREMENT_ID, trackPageview } from "../lib/gtag";
import "react-notion-x/src/styles.css";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const customTheme = extendTheme({ config });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <NativeBaseProvider isSSR theme={customTheme}>
        {/* @ts-expect-error ??? */}
        <Component {...pageProps} />
      </NativeBaseProvider>
    </>
  );
}

export default MyApp;
