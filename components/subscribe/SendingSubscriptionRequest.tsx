import React from "react";
import { Spinner, Text, Stack } from "native-base";
import { space } from "styling/spacing";

const SendingSubscriptionRequest = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      space={space.md}
      py={space.xl}
      px={space.xl}
    >
      <Spinner size="lg" color="orange.400" />
      <Text>Preparing your subscription...</Text>
    </Stack>
  );
};

export default SendingSubscriptionRequest;
