import React from "react";
import { VStack, Box, StatusBar } from "native-base";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Promoted from "../components/Promoted";
// import Subscribe from "../components/Subscribe";
// import Footer from "../components/Footer";
// import Carousel from "../components/Carousel";

export default function HomeScreen() {
  return (
    <Box
      flex={1}
      alignItems={{ base: "flex-start", xl: "center" }}
      _dark={{ bg: "gray.800" }}
    >
      <Box w={{ base: "100%", xl: "container.xl" }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Box safeAreaTop />
        <VStack space={5}>
          <Header />
          <Hero />
          {/* <Promoted /> */}
          {/* <Subscribe /> */}
          {/* <Footer /> */}
          {/* <Carousel /> */}
        </VStack>
      </Box>
    </Box>
  );
}
