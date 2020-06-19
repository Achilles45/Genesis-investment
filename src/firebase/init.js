import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZii2ztzKHC9crIF0FV05aus1Ce_cAJsk",
  authDomain: "genesis-investment.firebaseapp.com",
  databaseURL: "https://genesis-investment.firebaseio.com",
  projectId: "genesis-investment",
  storageBucket: "genesis-investment.appspot.com",
  messagingSenderId: "576946517992",
  appId: "1:576946517992:web:69fd32f2fb742b7eac965d",
  measurementId: "G-W5E64JMH87"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();