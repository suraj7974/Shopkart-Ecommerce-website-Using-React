import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-cZiSTLe42ATZQnG3xBU57D92HIBTTbw",
  authDomain: "shopkart-e-commerce-website.firebaseapp.com",
  projectId: "shopkart-e-commerce-website",
  storageBucket: "shopkart-e-commerce-website.appspot.com",
  messagingSenderId: "628519356598",
  appId: "1:628519356598:web:50f31f10e92cadd925be17",
  measurementId: "G-ZFXF7WKG09",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
