import React from "react";
import { Box, useBreakpointValue } from "native-base";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Promoted from "../components/Promoted";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default function HomeScreen() {
  return (
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
        <Header />
        <Hero />
        <Promoted />
        <Subscribe />
        <Footer />
      </Box>
    </Box>
  );
}
