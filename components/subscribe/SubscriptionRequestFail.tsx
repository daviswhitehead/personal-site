import React from "react";
import { Button, Text, Stack, VStack } from "native-base";
import { space } from "styling/spacing";
import socials from "lib/socials";
import LinkWithIcon from "components/LinkWithIcon";

type SubscriptionRequestFailProps = {
  onTryAgain: () => void;
  errorCode: string;
};

const SubscriptionRequestFail = ({
  onTryAgain,
  errorCode,
}: SubscriptionRequestFailProps) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      space={space.lg}
      py={space.xl}
      px={space.xl}
    >
      <VStack>
        <Text
          fontFamily="heading"
          fontWeight="500"
          fontSize="md"
          textAlign="center"
        >
          Oops, something went wrong
        </Text>
        <Text
          fontFamily="body"
          fontWeight="200"
          fontSize="sm"
          textAlign="center"
        >
          We were unable to successfully subscribe you. Building a great product
          is hard and sometimes we make mistakes!
        </Text>
      </VStack>
      <VStack space={space.md}>
        <Button
          py={1}
          px={space.lg}
          bg="orange.300"
          _hover={{
            bg: "orange.300",
          }}
          _pressed={{
            bg: "orange.400",
          }}
          onPress={onTryAgain}
        >
          <Text color={"black"}>Retry</Text>
        </Button>
        <LinkWithIcon
          url={
            socials.email.link +
            "?subject=I need help with my subscription to daviswhitehead.com" +
            "&body=I'm having trouble subscribing to daviswhitehead.com. Here's the error code I'm seeing: " +
            errorCode +
            "."
          }
          copy="Get help from Davis"
          target="_blank"
          fontSize="sm"
        />
      </VStack>
    </Stack>
  );
};

export default SubscriptionRequestFail;
