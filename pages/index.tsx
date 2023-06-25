import React from "react";
import PageLayout from "../components/PageLayout";
import Head from "next/head";
import Hero from "../components/Hero";
import { Stack } from "native-base";
import PromotedWriting from "../components/PromotedWriting";
import PromotedCollaborate from "../components/PromotedCollaborate";
import PromotedProduct from "../components/PromotedProduct";

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>daviswhitehead.com</title>
      </Head>
      <PageLayout>
        {({ modalVisible, setModalVisible }: ModalProps) => {
          return (
            <>
              <Hero />
              <Stack
                direction="column"
                overflow="hidden"
                space={{ base: "5", md: "10" }}
                py={{ base: "5", md: "10" }}
              >
                <PromotedProduct />
                <PromotedWriting
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                />
                <PromotedCollaborate />
              </Stack>
            </>
          );
        }}
      </PageLayout>
    </>
  );
}
