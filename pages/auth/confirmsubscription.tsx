import React from "react";
import { Box, Text } from "native-base";
import PageLayout from "../../components/PageLayout";
import Head from "next/head";
import routes from "../../lib/routes";
// import type { NextPage } from "next";

export default function ConfirmSubscription() {
  return (
    <>
      <Head>
        <title>{routes.COLLABORATE.title} | daviswhitehead.com</title>
        <meta name="description" content="Collaborate with Davis Whitehead." />
      </Head>
      {/* <PageLayout> */}
      <PageLayout modalVisibleDefault>
        <Box justifyContent="center" alignItems="center" h="100">
          <Text>COMING SOON</Text>
        </Box>
      </PageLayout>
    </>
  );
}
