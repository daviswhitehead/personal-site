import React, { useState } from "react";
import { Box, useBreakpointValue } from "native-base";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubscribeModal from "../components/SubscribeModal";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Box
        flex={1}
        _dark={{ bg: "gray.800" }}
        alignItems={useBreakpointValue({
          base: "flex-start",
          xl: "center",
        })}
      >
        <Box
          alignSelf={useBreakpointValue({
            base: "flex-start",
            xl: "center",
          })}
          w={{ base: "100%", xl: "container.xl" }}
        >
          <Header
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          {children}
          <Footer />
        </Box>
      </Box>
      <SubscribeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}
