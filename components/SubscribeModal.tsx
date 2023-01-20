import React from "react";
import { Button, FormControl, Input, Modal } from "native-base";

interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

export default function SubscribeModal(props: Props) {
  return (
    <>
      <Modal
        isOpen={props.modalVisible}
        onClose={() => props.setModalVisible(false)}
        avoidKeyboard
        size="lg"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password?</Modal.Header>
          <Modal.Body>
            Enter email address and we’ll send a link to reset your password.
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
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
