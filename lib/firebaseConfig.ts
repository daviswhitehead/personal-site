// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = isSupported().then((yes: boolean) =>
  yes ? getAnalytics(app) : null
);

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: `${process.env.NEXT_PUBLIC_URL}/auth/confirmsubscription`,
  // This must be true.
  handleCodeInApp: true,
};
// export const actionCodeSettings = {
//   // URL you want to redirect back to. The domain (www.example.com) for this
//   // URL must be in the authorized domains list in the Firebase Console.
//   url: 'https://www.daviswhitehead.com/scratch',
//   // This must be true.
//   handleCodeInApp: true,
// };
