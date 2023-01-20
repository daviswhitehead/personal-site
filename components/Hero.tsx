import React from "react";
import {
  Box,
  Stack,
  Text,
  VStack,
  Image,
  useBreakpointValue,
} from "native-base";
import headshot from "../public/images/headshot.png";
import routes from "../lib/routes";
import LinkWithIcon from "./LinkWithIcon";

export default function Hero() {
  return (
    <Box px={{ base: "4", md: "8" }} py={{ base: "3", md: "5" }}>
      <Stack
        space={{ base: "5", md: "10" }}
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems="center"
      >
        <Image
          source={{ uri: headshot.src }}
          alt="A photo of Davis Whitehead."
          size={"150"}
          resizeMode="contain"
        />
        <VStack
          flex={1}
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems={useBreakpointValue({
            base: "center",
            md: "flex-start",
          })}
        >
          <Text
            fontFamily="heading"
            fontWeight="800"
            fontSize="5xl"
            textAlign={{ base: "center", md: "left" }}
          >
            Hi, I’m Davis.
          </Text>
          <Text
            fontFamily="heading"
            fontWeight="200"
            fontSize="3xl"
            textAlign={{ base: "center", md: "left" }}
          >
            I’m a product maker. I make products people love. And I enjoy
            collaborating with others.
          </Text>
          <LinkWithIcon url={routes.ABOUT.path} copy="Learn more about me" />
        </VStack>
      </Stack>
    </Box>
  );
}
