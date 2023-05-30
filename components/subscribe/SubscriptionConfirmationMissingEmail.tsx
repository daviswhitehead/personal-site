import React from "react";
import { Text, Stack, VStack } from "native-base";
import Avatar from "components/Avatar";
import { space } from "styling/spacing";
import EmailInput from "components/forms/EmailInput";

type SubscriptionConfirmationMissingEmailProps = {
  onSubmit: () => void;
  onTextChange: (text: string) => void;
  email: string;
};

const SubscriptionConfirmationMissingEmail = ({
  onSubmit,
  onTextChange,
  email,
}: SubscriptionConfirmationMissingEmailProps) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      space={space.md}
      py={space.xl}
      px={space.xl}
    >
      <Avatar m={space.xl} />
      <VStack>
        <Text
          fontFamily="heading"
          fontWeight="500"
          fontSize="md"
          textAlign="center"
        >
          Oops, we lost your email
        </Text>
        <Text
          fontFamily="body"
          fontWeight="200"
          fontSize="sm"
          textAlign="center"
        >
          Please enter your email address to subscribe.
        </Text>
      </VStack>
      <VStack space={space.sm}>
        <EmailInput
          onSubmit={onSubmit}
          onTextChange={onTextChange}
          email={email}
        />
      </VStack>
    </Stack>
  );
};

export default SubscriptionConfirmationMissingEmail;
