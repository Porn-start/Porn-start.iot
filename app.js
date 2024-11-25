import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    //-- FIREBASE_CONFIGURATION -- //
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDnDNJmRRtJhiJ3XpQkXfdXz9qq0a8wKeA",
    authDomain: "rhe-farmacia.firebaseapp.com",
    projectId: "rhe-farmacia",
    storageBucket: "rhe-farmacia.firebasestorage.app",
    messagingSenderId: "689544903028",
    appId: "1:689544903028:web:e232221814ddd5d9f01421",
    measurementId: "G-TEQRDTTV11"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
