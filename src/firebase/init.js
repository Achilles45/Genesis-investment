import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRMBph3p0qz4qTy3CeiILt_V56lqCbydI",
  authDomain: "ultimate-investors.firebaseapp.com",
  databaseURL: "https://ultimate-investors.firebaseio.com",
  projectId: "ultimate-investors",
  storageBucket: "ultimate-investors.appspot.com",
  messagingSenderId: "710645458591",
  appId: "1:710645458591:web:43e8715042b3a9194424aa",
  measurementId: "G-0MD4087VC6"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();