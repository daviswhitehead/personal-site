import React from "react";
import PageLayout from "components/PageLayout";
import Head from "next/head";
import routes from "lib/routes";
import socials from "lib/socials";
import SocialStack from "components/SocialStack";

export default function HomeScreen() {
  console.log("socials.youtube.link", socials.youtube.link);
  console.log("socials", socials);

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
