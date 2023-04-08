import React from "react";
import { Box, Stack, VStack, useBreakpointValue } from "native-base";
import routes from "../lib/routes";
import LinkWithIcon from "./LinkWithIcon";
import H1 from "./typeography/H1";
import H3 from "./typeography/H3";
import { space } from "../styling/spacing";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <Box px={space.lg} py={space.md}>
      <Stack
        space={space.xl}
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems="center"
      >
        <Avatar />
        <VStack
          flex={1}
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems={useBreakpointValue({
            base: "center",
            md: "flex-start",
          })}
        >
          <H1>Hi, I’m Davis.</H1>
          <H3>
            I make products people love. I write reflections on life. And I
            enjoy collaborating with others.
          </H3>
          <LinkWithIcon url={routes.ABOUT.path} copy="Learn more about me" />
        </VStack>
      </Stack>
    </Box>
  );
}
