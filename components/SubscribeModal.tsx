import React, { useEffect } from "react";
import { Button, FormControl, Input, Modal } from "native-base";
import { trackEvent, composeAction } from "../lib/gtag";
import { categories, actions, objects } from "../lib/analyticsDefinitions";

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
    >
      <Modal.Content position="sticky" marginTop={0} top="200" bottom="200">
        <Modal.CloseButton />
        <Modal.Header>Coming Soon</Modal.Header>
        <Modal.Body>
          Coming soon!
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button
            flex="1"
            onPress={() => {
              props.setModalVisible(false);
            }}
          >
            Close me
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
