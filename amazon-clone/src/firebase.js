// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKTBFdBcTwsjg2T7qfzSe5Swn0oDo0X2c",
    authDomain: "challenge-e53bd.firebaseapp.com",
    projectId: "challenge-e53bd",
    storageBucket: "challenge-e53bd.appspot.com",
    messagingSenderId: "52227794900",
    appId: "1:52227794900:web:ac65a692350a2319931841",
    measurementId: "G-JVXJSN63EW"
  };

  //INITIALIZING FIREBASE IN THE APP
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //INITIALIZING THE DATABASE FOR DB AND AUTH
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};