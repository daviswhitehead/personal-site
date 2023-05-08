import React, { useEffect, useState } from "react";
import { Box, Modal, Stack } from "native-base";
import { trackEvent, composeAction } from "../../lib/gtag";
import { categories, actions, objects } from "../../lib/analyticsDefinitions";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { actionCodeSettings } from "../../lib/firebaseConfig";
import AwaitingSubscription from "./AwaitingSubscription";
import SendingSubscriptionRequest from "./SendingSubscriptionRequest";
import SubscriptionRequestSuccess from "./SubscriptionRequestSuccess";
import SubscriptionRequestFail from "./SubscriptionRequestFail";
import { space } from "styling/spacing";

// https://github.com/anirudhvsp/hack-with-nativebase-tradebook/blob/f3eb8ed69f0f3c0a450bfd49257742f1f01395dd/page/Login.jsx

interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

type SubscriptionState =
  | "AWAITING_SUBCRIPTION"
  | "SENDING_SUBSCRIPTION_REQUEST"
  | "SUBSCRIPTION_REQUEST_SUCCESS"
  | "SUBSCRIPTION_REQUEST_FAIL";

export default function SubscribeModal(props: Props) {
  // modal positioning
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = props.modalVisible ? "hidden" : "auto";
      setScrollPosition(window.pageYOffset);
      setWindowHeight(window.innerHeight);
    }
  }, [props.modalVisible]);
  console.log("scrollPosition", scrollPosition);
  console.log("windowHeight", windowHeight);

  // analytics
  useEffect(() => {
    if (props.modalVisible) {
      trackEvent({
        action: composeAction(actions.VIEW, objects.SUBSCRIBE_MODAL),
        category: categories.SUBSCRIBE,
      });
    }
  }, [props.modalVisible]);

  // subscription state
  const [email, setEmail] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const [subscriptionState, setsubscriptionState] = useState<SubscriptionState>(
    "AWAITING_SUBCRIPTION"
  );
  console.log("subscriptionState", subscriptionState);

  const onSubmit = () => {
    setsubscriptionState("SENDING_SUBSCRIPTION_REQUEST");
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        setsubscriptionState("SUBSCRIPTION_REQUEST_SUCCESS");

        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        setsubscriptionState("SUBSCRIPTION_REQUEST_FAIL");

        setErrorCode(error.code);
        // const errorMessage = error.message;
      });
  };

  const onTextChange = (text: string) => {
    setEmail(text);
  };

  const tryAgain = () => {
    // to do
    console.log("hellow");
  };

  const renderChild = (subscriptionState: SubscriptionState) => {
    switch (subscriptionState) {
      case "AWAITING_SUBCRIPTION":
        return (
          <AwaitingSubscription
            onSubmit={onSubmit}
            onTextChange={onTextChange}
            onCancel={() => {
              props.setModalVisible(false);
            }}
            email={email}
          />
        );
      case "SENDING_SUBSCRIPTION_REQUEST":
        return <SendingSubscriptionRequest />;
      case "SUBSCRIPTION_REQUEST_SUCCESS":
        return (
          <SubscriptionRequestSuccess
            onDone={() => {
              props.setModalVisible(false);
            }}
            email={email}
          />
        );
      case "SUBSCRIPTION_REQUEST_FAIL":
        return (
          <SubscriptionRequestFail
            onTryAgain={tryAgain}
            errorCode={errorCode}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={props.modalVisible}
      onClose={() => props.setModalVisible(false)}
      avoidKeyboard
      size="full"
      _backdrop={{
        _dark: {
          bg: "black",
          opacity: 0.9,
        },
      }}
    >
      <Modal.Content
        position="fixed"
        // multiplying by 0.2 because the modal is 80% of the screen
        top={scrollPosition + (windowHeight * 0.2) / 2}
        width={{
          base: "90%",
          md: "container.sm",
        }}
        height="40%"
        alignItems="center"
        justifyContent="center"
      >
        <Modal.CloseButton
          _hover={{
            bg: "unstyled",
            _icon: {
              color: "orange.300",
            },
          }}
          _pressed={{
            bg: "unstyled",
            _icon: {
              color: "orange.400",
            },
          }}
        />
        <Box maxW={"container.sm"}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            space={space.md}
            py={space.xl}
            px={space.xl}
          >
            {renderChild(subscriptionState)}
          </Stack>
        </Box>
      </Modal.Content>
    </Modal>
  );
}
