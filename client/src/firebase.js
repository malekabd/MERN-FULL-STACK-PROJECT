// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-adb57.firebaseapp.com",
  projectId: "mern-estate-adb57",
  storageBucket: "mern-estate-adb57.appspot.com",
  messagingSenderId: "894754674427",
  appId: "1:894754674427:web:5265186ada06221d03c25e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
