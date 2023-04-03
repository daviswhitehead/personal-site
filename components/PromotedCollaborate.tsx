import React from "react";
import { Stack, Text, VStack, useBreakpointValue } from "native-base";
import LinkWithIcon from "./LinkWithIcon";
import socials from "lib/socials";
// import helpMeBuildProduct from "../public/images/helpMeBuildProduct.png";
// import shareYourFeedbackWithMe from "../public/images/shareYourFeedbackWithMe.png";
// import howCanIHelpYou from "../public/images/howCanIHelpYou.png";

export default function Promoted() {
  return (
    <Stack
      space={{ base: "5", md: "10" }}
      direction={{ base: "column-reverse", md: "row" }}
      px={{ base: "4", md: "8" }}
      py={{ base: "3", md: "5" }}
      alignItems="center"
    >
      <VStack
        flex={1}
        alignItems={useBreakpointValue({
          base: "center",
          md: "flex-start",
        })}
      >
        <Text
          fontFamily="heading"
          fontWeight="200"
          fontSize="3xl"
          textAlign={{ base: "center", md: "left" }}
          py={{ base: "3", md: "6" }}
        >
          Collaborating with others
        </Text>
        <Text
          fontFamily="body"
          fontWeight="300"
          fontSize="lg"
          textAlign={{ base: "center", md: "left" }}
          py={{ base: "2", md: "4" }}
        >
          Collaboration is integral to creating a product people love and it’s
          just plain fun. I’m the type of person who always has a short list of
          products to build and topics to write about. I’m always open to
          receiving help and also helping others. Consider this an open
          invitation to connect with me!
        </Text>
        <LinkWithIcon
          url={socials.email.link}
          copy="Send me a message"
          target="_blank"
          fontSize="md"
        />
        <LinkWithIcon
          url={socials.calendar.link}
          copy="Schedule time with me"
          target="_blank"
          fontSize="md"
        />
      </VStack>
    </Stack>
  );
}
