import React, { useEffect } from "react";
import { Spinner, Text, Stack } from "native-base";
import { space } from "styling/spacing";

type SendingSubscriptionRequestProps = {
  onTimeout: () => void;
};

const SendingSubscriptionRequest = ({
  onTimeout,
}: SendingSubscriptionRequestProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onTimeout]);

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
