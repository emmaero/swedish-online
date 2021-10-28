
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEEaLDiHrRh38ME2P1xJU_QxoZrb94HQs",
  authDomain: "swedish-online.firebaseapp.com",
  projectId: "swedish-online",
  storageBucket: "swedish-online.appspot.com",
  messagingSenderId: "358852128692",
  appId: "1:358852128692:web:2b3c6bd10ca7d2b58b0ce1",
};

// Initialize Firebase
const firebaseInstance = initializeApp(firebaseConfig);
export const fireStoreDatabase = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
export const cloudStorageReference = getStorage(firebaseInstance);