import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBLNTWQpJWm1NX3OqHuzZD2qLsI8-x5Iq8",
  authDomain: "note-taking-app-2d4d2.firebaseapp.com",
  projectId: "note-taking-app-2d4d2",
  storageBucket: "note-taking-app-2d4d2.appspot.com",
  messagingSenderId: "1055499344402",
  appId: "1:1055499344402:web:4046747aca1a43cac716cb",
  measurementId: "G-BGCBWSTTPJ"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let db = firebase.firestore();
firebase.analytics();


export { firebaseAuth }

export default {
  db
}