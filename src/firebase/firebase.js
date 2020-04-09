import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAbqVCR1_3SlG6ZDiuhyMqiZSBJtpv_eO0",
    authDomain: "the-town-c2642.firebaseapp.com",
    databaseURL: "https://the-town-c2642.firebaseio.com",
    projectId: "the-town-c2642",
    storageBucket: "the-town-c2642.appspot.com",
    messagingSenderId: "1008772998184",
    appId: "1:1008772998184:web:cd216204dd7b68bede011d",
    measurementId: "G-FB44TJXMTZ"
  };


export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;