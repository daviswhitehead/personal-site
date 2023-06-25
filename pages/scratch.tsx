import React, { useState } from "react";
import { Box, Text, useBreakpointValue, Input } from "native-base";
import Header from "../components/Header";
import LinkWithIcon from "components/LinkWithIcon";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (text: string) => setValue(text);

  return (
    <>
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
          <Input
            placeholder="Type your email..."
            type="text"
            value={email}
            onChangeText={(e) => {
              setEmail(e);
            }}
          />
          <Input
            value={value}
            w="100%"
            onChangeText={handleChange}
            placeholder="Value Controlled Input"
          />
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
