// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjFrHa1mUNe--gsBntGv7mSM4qJ1IBtrs",
  authDomain: "daviswhitehead-d876f.firebaseapp.com",
  projectId: "daviswhitehead-d876f",
  storageBucket: "daviswhitehead-d876f.appspot.com",
  messagingSenderId: "188268351581",
  appId: "1:188268351581:web:6a4aaa4b1e091cce46bdb4",
  measurementId: "G-4GTZVBD2XF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3001/auth/confirmsubscription",
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
