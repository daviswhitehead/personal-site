import React, { useEffect } from "react";
import { Box, Text } from "native-base";
import PageLayout from "../../components/PageLayout";
import Head from "next/head";
import routes from "../../lib/routes";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { useRouter } from "next/router";
// import type { NextPage } from "next";

export default function HomeScreen() {
  console.log("SignupConfirm");

  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    console.log("useEffect");
    const link = window.location.href;
    console.log("link", link);

    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }

    // Confirm the link is a sign-in with email link.
    if (router.isReady && isSignInWithEmailLink(auth, router.asPath)) {
      console.log("isSignInWithEmailLink");
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
      }
      console.log("email", email);

      // The client SDK will parse the code from the link for you.
      // @ts-expect-error email assumed to be string...
      signInWithEmailLink(auth, email, router.asPath)
        .then(() => {
          // Clear email from storage.
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
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
        });
    }
  }, [auth, router]);

  return (
    <>
      <Head>
        <title>{routes.COLLABORATE.title} | daviswhitehead.com</title>
        <meta name="description" content="Collaborate with Davis Whitehead." />
      </Head>
      <PageLayout>
        <Box justifyContent="center" alignItems="center" h="100">
          <Text>COMING SOON</Text>
        </Box>
      </PageLayout>
    </>
  );
}
