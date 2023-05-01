import React, { useEffect, useState } from "react";
import {
  FormControl,
  Input,
  Modal,
  Stack,
  Text,
  Button,
  VStack,
  // useToast,
} from "native-base";
import { trackEvent, composeAction } from "../lib/gtag";
import { categories, actions, objects } from "../lib/analyticsDefinitions";
import Avatar from "./Avatar";
// import H3 from "./typeography/H3";
import { space } from "../styling/spacing";
import LinkWithIcon from "./LinkWithIcon";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { actionCodeSettings } from "../lib/firebaseConfig";

// https://github.com/anirudhvsp/hack-with-nativebase-tradebook/blob/f3eb8ed69f0f3c0a450bfd49257742f1f01395dd/page/Login.jsx

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

  const [email, setEmail] = useState("");
  // console.log("setEmail", setEmail);

  // const [loading, setLoading] = useState(false);

  // const toast = useToast();

  const handleSubmit = () => {
    console.log("handleSubmit");
    console.log("email", email);

    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("errorCode", errorCode);
        console.log("errorMessage", errorMessage);
        // ...
      });

    // setLoading(true);
    // const { session, error } = await supabase.auth.signUp({
    //   email: email,
    //   password: email.split("@")[0],
    // });
    // if (!error || error.message === "User already registered") {
    //   console.log(user, session, error);
    //   await supabase.auth.signIn({
    //     email,
    //   });
    //   toast.show({
    //     title: "Login Link sent to email",
    //     placement: "bottom",
    //   });
    //   setLoading(false);
    // } else {
    //   toast.show({
    //     title: error.message,
    //     placement: "bottom",
    //   });
    //   setLoading(false);
    // }
    // console.log(supabase.auth.currentUser);
  };

  // See if you can get the window width and height and use that to set the content height and width

  return (
    <Modal
      isOpen={props.modalVisible}
      onClose={() => props.setModalVisible(false)}
      avoidKeyboard
      // size="full"
      size="lg"
      _backdrop={{
        _dark: {
          bg: "black",
          opacity: 0.9,
        },
      }}
    >
      {/* the line below needs to be dynamic somehow */}
      <Modal.Content position="sticky" marginTop={0} top="235" bottom="235">
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
        <Modal.Body>
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
                    // console.log("e", e);

                    setEmail(e);
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
                      // onPress={() => console.log("pressed")}
                    >
                      <Text color={"black"}>Subscribe</Text>
                    </Button>
                  }
                />
              </FormControl>
              <LinkWithIcon
                onPress={() => {
                  props.setModalVisible(false);
                }}
                copy="No thanks"
                target="_blank"
                fontSize="sm"
              />
            </VStack>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
