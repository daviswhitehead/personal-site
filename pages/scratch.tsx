import React from "react";
import { Box, Text } from "native-base";

export default function HomeScreen() {
  return (
    <Box
      flex={1}
      alignItems={{ base: "flex-start", xl: "center" }}
      _dark={{ bg: "gray.800" }}
    >
      <Text>Scratch</Text>
    </Box>
  );
}
