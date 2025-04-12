import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwn-nayo8-Jp5gQ-7GzTIWd9f80Uh-Orw",
  authDomain: "typingtest-4fa70.firebaseapp.com",
  projectId: "typingtest-4fa70",
  storageBucket: "typingtest-4fa70.firebasestorage.app",
  messagingSenderId: "127803567495",
  appId: "1:127803567495:web:41088d9e2cfaf27661b722",
  measurementId: "G-T924XYQKNP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const googleProvider = new GoogleAuthProvider();

export {auth, db, googleProvider};