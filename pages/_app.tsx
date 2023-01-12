import React from "react";
import type { AppProps } from "next/app";
import { NativeBaseProvider, extendTheme, Box } from "native-base";
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
      <NativeBaseProvider isSSR>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </>
  );
}

export default MyApp;

// export function Provider({ children }: { children: React.ReactNode }) {
//   return (
//     <NavigationProvider>
//       <NativeBaseProvider isSSR theme={customTheme}>
//         <Box display={"flex"} flex={1} _dark={{ bg: "gray.800" }}>
//           {children}
//         </Box>
//       </NativeBaseProvider>
//     </NavigationProvider>
//   );
// }
