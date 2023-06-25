import React from "react";
import { Text, Stack, VStack } from "native-base";
import Avatar from "components/Avatar";
import LinkWithIcon from "components/LinkWithIcon";
import { space } from "styling/spacing";
import EmailInput from "components/forms/EmailInput";

type AwaitingSubscriptionProps = {
  onSubmit: () => void;
  onTextChange: (text: string) => void;
  onCancel: () => void;
  email: string;
};

const AwaitingSubscription = ({
  onSubmit,
  onTextChange,
  onCancel,
  email,
}: AwaitingSubscriptionProps) => {
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
          Stay up to date with Davis
        </Text>
        <Text
          fontFamily="body"
          fontWeight="200"
          fontSize="sm"
          textAlign="center"
        >
          Reflections on living intentionally -- product pitches, life
          experiments, and personal vignettes.
        </Text>
      </VStack>
      <VStack space={space.sm}>
        <EmailInput
          onSubmit={onSubmit}
          onTextChange={onTextChange}
          email={email}
        />
        <LinkWithIcon
          onPress={onCancel}
          copy="No thanks"
          target="_blank"
          fontSize="sm"
        />
      </VStack>
    </Stack>
  );
};

export default AwaitingSubscription;
