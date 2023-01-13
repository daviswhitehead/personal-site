import React from "react";
import { Box, Text } from "native-base";
import Carousel from "../components/Carousel";

export default function HomeScreen() {
  return (
    <Box
      flex={1}
      alignItems={{ base: "flex-start", xl: "center" }}
      _dark={{ bg: "gray.800" }}
    >
      <Text>Scratch</Text>
      <Carousel />
    </Box>
  );
}
