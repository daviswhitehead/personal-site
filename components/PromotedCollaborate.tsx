import React from "react";
import { Stack, VStack, useBreakpointValue } from "native-base";
import LinkWithIcon from "./LinkWithIcon";
import socials from "lib/socials";
import routes from "lib/routes";
import H2 from "./typeography/H2";
import { space } from "styling/spacing";
import Body from "./typeography/Body";
// import helpMeBuildProduct from "../public/images/helpMeBuildProduct.png";
// import shareYourFeedbackWithMe from "../public/images/shareYourFeedbackWithMe.png";
// import howCanIHelpYou from "../public/images/howCanIHelpYou.png";

export default function Promoted() {
  return (
    <Stack
      px={space.lg}
      py={space.md}
      direction={{ base: "column-reverse", md: "row" }}
      alignItems="center"
    >
      <VStack
        flex={1}
        alignItems={useBreakpointValue({
          base: "center",
          md: "flex-start",
        })}
      >
        <H2>Collaborating with others</H2>
        <Body pt={space.sm} pb={space.md}>
          Collaboration is integral to creating a product people love and it’s
          just plain fun. I’m the type of person who always has a short list of
          products to build and topics to write about. I’m always open to
          receiving help and helping others. Consider this an open invitation to
          connect with me!
        </Body>
        <LinkWithIcon
          url={routes.COLLABORATE.path}
          copy="Check out opportunities to collaborate"
        />
        <LinkWithIcon
          url={socials.email.link}
          copy="Get in touch"
          target="_blank"
          fontSize="md"
        />
      </VStack>
    </Stack>
  );
}
