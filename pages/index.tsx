import React from "react";
import PageLayout from "../components/PageLayout";
import Head from "next/head";
import Hero from "../components/Hero";
import PromotedLayout from "../components/PromotedLayout";

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>daviswhitehead.com</title>
      </Head>
      <PageLayout>
        <Hero />
        <PromotedLayout />
      </PageLayout>
    </>
  );
}
