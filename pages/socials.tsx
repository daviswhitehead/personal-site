import React from "react";
import PageLayout from "components/PageLayout";
import Head from "next/head";
import routes from "lib/routes";
import SocialStack from "components/SocialStack";

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>{routes.SOCIALS.title} | daviswhitehead.com</title>
        <meta name="description" content="Socials by Davis Whitehead." />
      </Head>
      <PageLayout>
        <SocialStack />
      </PageLayout>
    </>
  );
}
