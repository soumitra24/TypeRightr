import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBUYh9RQQLzc2PD1wLNP9N0Q9h4k59kYsY",
  
    authDomain: "typerightr-240bb.firebaseapp.com",
  
    projectId: "typerightr-240bb",
  
    storageBucket: "typerightr-240bb.appspot.com",
  
    messagingSenderId: "895649925548",
  
    appId: "1:895649925548:web:202cff11bc7121ef315209",
  
    measurementId: "G-ZN48WD3EJ2"
  
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const googleProvider = new GoogleAuthProvider();

export {auth, db, googleProvider};