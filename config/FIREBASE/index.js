import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

firebase.initializeApp({
  apiKey: "AIzaSyDxJG5xnq3YpIgTMFzyqp_HcJc5CkH7oHw",
  authDomain: "stackedscribe.firebaseapp.com",
  projectId: "stackedscribe",
  storageBucket: "stackedscribe.appspot.com",
  messagingSenderId: "92723376634",
  appId: "1:92723376634:web:7d228623e1a406156b7443",
});

const FIREBASE = firebase;

export default FIREBASE;