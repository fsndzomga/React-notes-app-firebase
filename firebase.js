// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKP6MO8LWpH0dMzuHeVv7Vi86_p6RNYpg",
  authDomain: "react-notes-app-79994.firebaseapp.com",
  projectId: "react-notes-app-79994",
  storageBucket: "react-notes-app-79994.appspot.com",
  messagingSenderId: "26909206260",
  appId: "1:26909206260:web:547935b6fe8ade3327e0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
