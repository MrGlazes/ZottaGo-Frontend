
import firebase from "./firebase";
  
const firebaseConfig = {
    apiKey: "AIzaSyAMVFzpBRtRN4d62I-DYVdYsWTtXRDReYQ",
    authDomain: "zottago.firebaseapp.com",
    projectId: "zottago",
    storageBucket: "zottago.appspot.com",
    messagingSenderId: "632919112479",
    appId: "1:632919112479:web:5d65cc1ed474cec8a7ce2a",
    measurementId: "G-4XXRE2X4XZ"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;