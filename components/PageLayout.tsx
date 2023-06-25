import React, { useState } from "react";
import { Box, useBreakpointValue } from "native-base";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubscribeModal from "./subscribe/SubscribeModal";

interface Props {
  children: React.ReactNode;
  modalVisibleDefault?: boolean;
}

export default function PageLayout({ children, modalVisibleDefault }: Props) {
  const [modalVisible, setModalVisible] = useState(
    modalVisibleDefault || false
  );

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
          {/* {children} */}
          {typeof children !== "function"
            ? children
            : children({ modalVisible, setModalVisible })}
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
