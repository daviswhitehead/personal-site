import React, { useEffect } from "react";
import { FormControl, Input, Modal, Stack, Text } from "native-base";
import { trackEvent, composeAction } from "../lib/gtag";
import { categories, actions, objects } from "../lib/analyticsDefinitions";
import Avatar from "./Avatar";
// import H3 from "./typeography/H3";
import { space } from "../styling/spacing";
import LinkWithIcon from "./LinkWithIcon";

interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

export default function SubscribeModal(props: Props) {
  useEffect(() => {
    if (props.modalVisible) {
      trackEvent({
        action: composeAction(actions.VIEW, objects.SUBSCRIBE_MODAL),
        category: categories.SUBSCRIBE,
      });
    }
  }, [props.modalVisible]);

  return (
    <Modal
      isOpen={props.modalVisible}
      onClose={() => props.setModalVisible(false)}
      avoidKeyboard
      size="lg"
      _backdrop={{
        _dark: {
          // bg: "orange.400",
          bg: "black",
          opacity: 0.8,
        },
        bg: "warmGray.50",
      }}
    >
      <Modal.Content position="sticky" marginTop={0} top="375" bottom="375">
        <Modal.CloseButton />
        <Modal.Body>
          <Stack
            direction="column"
            alignItems="center"
            space={0}
            py={space.lg}
            px={space.lg}
          >
            <Avatar />
            <Text
              fontFamily="heading"
              // fontWeight="200"
              fontSize="md"
              textAlign="center"
            >
              Subscribe to my newsletter
            </Text>
            <Text
              fontFamily="body"
              fontWeight="200"
              fontSize="sm"
              textAlign="center"
            >
              Reflections on what it means to live a well-lived life -- product
              pitches, life experiments, and personal vignettes.
            </Text>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <LinkWithIcon
              onPress={() => {
                props.setModalVisible(false);
              }}
              copy="No thanks"
              target="_blank"
              fontSize="sm"
            />
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
