// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-1fb0b.firebaseapp.com",
  projectId: "mernestate-1fb0b",
  storageBucket: "mernestate-1fb0b.appspot.com",
  messagingSenderId: "173874941204",
  appId: "1:173874941204:web:6ca2efb15ce12ebc37c601",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
