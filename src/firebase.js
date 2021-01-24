import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_a41AuoaNlcd4KTL7vUX5StMA3M5e3q4",
  authDomain: "clone-f43d5.firebaseapp.com",
  databaseURL: "https://clone-f43d5.firebaseio.com",
  projectId: "clone-f43d5",
  storageBucket: "clone-f43d5.appspot.com",
  messagingSenderId: "990538283281",
  appId: "1:990538283281:web:1946964576d22c2b66f4b0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };