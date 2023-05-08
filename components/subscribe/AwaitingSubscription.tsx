import React from "react";
import { Input, Button, Text, Stack, VStack, FormControl } from "native-base";
import Avatar from "components/Avatar";
import LinkWithIcon from "components/LinkWithIcon";
import { space } from "styling/spacing";

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
  const handleTextChange = (value: string) => {
    onTextChange(value);
  };

  const handleSubmit = () => {
    onSubmit();
  };

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
        <FormControl mt="3" p={space.sm} borderColor="orange.400">
          <Input
            placeholder="Type your email..."
            type="text"
            _hover={{
              borderColor: "orange.300",
            }}
            _focus={{
              borderColor: "orange.300",
              bg: "unstyled",
              borderWidth: "1",
            }}
            focusOutlineColor="orange.300"
            borderColor="orange.300"
            value={email}
            onChangeText={(e) => {
              handleTextChange(e);
            }}
            InputRightElement={
              <Button
                rounded="none"
                w="1/6"
                h="100%"
                p={0}
                px={10}
                bg="orange.300"
                _hover={{
                  bg: "orange.300",
                }}
                _pressed={{
                  bg: "orange.400",
                }}
                onPress={handleSubmit}
              >
                <Text color={"black"}>Subscribe</Text>
              </Button>
            }
          />
        </FormControl>
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
