import React from "react";
import { Button, Text, Stack, VStack } from "native-base";
import { space } from "styling/spacing";

type SubscriptionRequestSuccessProps = {
  onDone: () => void;
  email: string;
};

const SubscriptionRequestSuccess = ({
  onDone,
  email,
}: SubscriptionRequestSuccessProps) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      space={space.md}
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
          Confirm your email address
        </Text>
        <Text
          fontFamily="body"
          fontWeight="200"
          fontSize="sm"
          textAlign="center"
        >
          We sent an email to {email} with a confirmation link. Click the link
          to finish your subscription.
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
          onPress={onDone}
        >
          <Text color={"black"}>Done</Text>
        </Button>
      </VStack>
    </Stack>
  );
};

export default SubscriptionRequestSuccess;
