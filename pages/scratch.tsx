import { useState } from "react";
import { Box, Text, useBreakpointValue } from "native-base";
import Header from "../components/Header";
import SubscribeModal from "../components/SubscribeModal";
import LinkWithIcon from "components/LinkWithIcon";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(window.scrollY);

  return (
    <>
      <SubscribeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Box
        flex={1}
        _dark={{ bg: "gray.800" }}
        alignItems={useBreakpointValue({
          base: "flex-start",
          xl: "center",
        })}
        borderWidth={2}
        borderColor={"red.500"}
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
          <Text>Scratch</Text>
          <LinkWithIcon
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            copy="Subscribe"
            noIcon
          />
        </Box>
      </Box>
    </>
  );
}
