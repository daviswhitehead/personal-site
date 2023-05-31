import React, { useEffect, useState } from "react";
import { Box, Modal, Stack } from "native-base";
import { trackEvent, composeAction } from "../../lib/gtag";
import { categories, actions, objects } from "../../lib/analyticsDefinitions";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { actionCodeSettings } from "../../lib/firebaseConfig";
import AwaitingSubscription from "./AwaitingSubscription";
import SendingSubscriptionRequest from "./SendingSubscriptionRequest";
import SubscriptionRequestSuccess from "./SubscriptionRequestSuccess";
import SubscriptionRequestFail from "./SubscriptionRequestFail";
import SubscriptionConfirmationSuccess from "./SubscriptionConfirmationSuccess";
import SubscriptionConfirmationMissingEmail from "./SubscriptionConfirmationMissingEmail";
import { space } from "styling/spacing";
import { useRouter } from "next/router";

// https://github.com/anirudhvsp/hack-with-nativebase-tradebook/blob/f3eb8ed69f0f3c0a450bfd49257742f1f01395dd/page/Login.jsx

interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

type SubscriptionState =
  | "LOADING"
  | "AWAITING_CONFIRMATION"
  | "SUBSCRIPTION_CONFIRMATION_SUCCESS"
  | "SUBSCRIPTION_CONFIRMATION_MISSING_EMAIL"
  | "SUBSCRIPTION_CONFIRMATION_FAIL"
  | "AWAITING_SUBCRIPTION"
  | "SENDING_SUBSCRIPTION_REQUEST"
  | "SUBSCRIPTION_REQUEST_SUCCESS"
  | "SUBSCRIPTION_REQUEST_FAIL"
  | "FAIL";

export default function SubscribeModal({
  modalVisible,
  setModalVisible,
}: Props) {
  // modal positioning
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = modalVisible ? "hidden" : "auto";
      setScrollPosition(window.pageYOffset);
      setWindowHeight(window.innerHeight);
    }
  }, [modalVisible]);

  // analytics
  useEffect(() => {
    if (modalVisible) {
      trackEvent({
        action: composeAction(actions.VIEW, objects.SUBSCRIBE_MODAL),
        category: categories.SUBSCRIBE,
      });
    }
  }, [modalVisible]);

  // subscription state
  const auth = getAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [confirmationEmailSet, setConfirmationEmailSet] = useState(false);
  const [retry, setRetry] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const [subscriptionState, setSubscriptionState] = useState<SubscriptionState>(
    "LOADING"
    // "SUBSCRIPTION_CONFIRMATION_SUCCESS"
  );
  const resetState = () => {
    setEmail("");
    setConfirmationEmailSet(false);
    setRetry(false);
    setErrorCode("");
  };

  console.log("subscriptionState", subscriptionState);

  useEffect(() => {
    // Check if the link is a sign-in with email link.
    if (router.isReady) {
      if (isSignInWithEmailLink(auth, router.asPath) && !retry) {
        setModalVisible(true);
        console.log("isSignInWithEmailLink");

        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        const storageEmail = window.localStorage.getItem("emailForSignIn");
        console.log("storageEmail", storageEmail);

        if (storageEmail) {
          setEmail(storageEmail);
          setConfirmationEmailSet(true);
        } else {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again. For example:

          setSubscriptionState("SUBSCRIPTION_CONFIRMATION_MISSING_EMAIL");
        }

        console.log("email", email);
        console.log("confirmationEmailSet", confirmationEmailSet);

        if (email && confirmationEmailSet) {
          // The client SDK will parse the code from the link for you.
          signInWithEmailLink(auth, email, router.asPath)
            .then(() => {
              setSubscriptionState("SUBSCRIPTION_CONFIRMATION_SUCCESS");
              window.localStorage.removeItem("emailForSignIn");
              // You can access the new user via result.user
              // Additional user info profile not available via:
              // result.additionalUserInfo.profile == null
              // You can check if the user is new or existing:
              // result.additionalUserInfo.isNewUser
            })
            .catch((error) => {
              // Some error occurred, you can inspect the code: error.code
              // Common errors could be invalid email and invalid or expired OTPs.
              setSubscriptionState("SUBSCRIPTION_CONFIRMATION_FAIL");
              setErrorCode(error.code);
            });
        }
      } else {
        setSubscriptionState("AWAITING_SUBCRIPTION");
      }
    }
  }, [auth, router, confirmationEmailSet, email, retry, setModalVisible]);

  const onSubmit = () => {
    setSubscriptionState("SENDING_SUBSCRIPTION_REQUEST");
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        setSubscriptionState("SUBSCRIPTION_REQUEST_SUCCESS");

        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        setSubscriptionState("SUBSCRIPTION_REQUEST_FAIL");
        setErrorCode(error.code);
        // const errorMessage = error.message;
      });
  };

  const onSubmitMissingEmail = () => {
    setConfirmationEmailSet(true);
  };

  const onTextChange = (text: string) => {
    setEmail(text);
  };

  const onRetry = () => {
    resetState();
    setRetry(true);
    setSubscriptionState("AWAITING_SUBCRIPTION");
  };

  const onTimeout = () => {
    resetState();
    setSubscriptionState("FAIL");
  };

  const renderChild = (subscriptionState: SubscriptionState) => {
    switch (subscriptionState) {
      case "AWAITING_SUBCRIPTION":
        return (
          <AwaitingSubscription
            onSubmit={onSubmit}
            onTextChange={onTextChange}
            onCancel={() => {
              setModalVisible(false);
            }}
            email={email}
          />
        );
      case "LOADING":
      case "SENDING_SUBSCRIPTION_REQUEST":
      case "AWAITING_CONFIRMATION":
        return <SendingSubscriptionRequest onTimeout={onTimeout} />;
      case "SUBSCRIPTION_REQUEST_SUCCESS":
        return (
          <SubscriptionRequestSuccess
            onDone={() => {
              setModalVisible(false);
            }}
            email={email}
          />
        );
      case "FAIL":
      case "SUBSCRIPTION_REQUEST_FAIL":
      case "SUBSCRIPTION_CONFIRMATION_FAIL":
        return (
          <SubscriptionRequestFail onRetry={onRetry} errorCode={errorCode} />
        );
      case "SUBSCRIPTION_CONFIRMATION_SUCCESS":
        return (
          <SubscriptionConfirmationSuccess
            onDone={() => {
              setModalVisible(false);
            }}
            email={email}
          />
        );
      case "SUBSCRIPTION_CONFIRMATION_MISSING_EMAIL":
        return (
          <SubscriptionConfirmationMissingEmail
            onSubmit={onSubmitMissingEmail}
            onTextChange={onTextChange}
            email={email}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => setModalVisible(false)}
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
