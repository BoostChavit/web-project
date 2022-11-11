// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT4i6v6Tpn1FLtPMZEKF4ZQdVG6SsjgAw",
  authDomain: "web-firebase-7cf1e.firebaseapp.com",
  projectId: "web-firebase-7cf1e",
  storageBucket: "web-firebase-7cf1e.appspot.com",
  messagingSenderId: "270734211264",
  appId: "1:270734211264:web:bd85ae77336b69261a9525",
  measurementId: "G-RGC2S9M6KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);