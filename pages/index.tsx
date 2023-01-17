import React from "react";
import { VStack, Box } from "native-base";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Promoted from "../components/Promoted";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Box
        flex={1}
        alignItems={{ base: "flex-start", xl: "center" }}
        _dark={{ bg: "gray.800" }}
        borderWidth={2}
        borderColor={"red.500"}
      >
        <Box w={{ base: "100%", xl: "container.xl" }}>
          <Box safeAreaTop />
          <VStack space={5}>
            <Header />
            <Hero />
            <Promoted />
            <Subscribe />
            <Footer />
          </VStack>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
