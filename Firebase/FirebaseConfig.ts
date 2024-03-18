// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSurEepzyQUSGzuOynKCHj6l53VgBHoDk",
  authDomain: "grocerylist-2feff.firebaseapp.com",
  projectId: "grocerylist-2feff",
  storageBucket: "grocerylist-2feff.appspot.com",
  messagingSenderId: "693466377228",
  appId: "1:693466377228:web:c56edc5ef1652b1c3ed229"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);