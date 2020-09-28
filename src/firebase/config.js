 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore'; 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBqwPeOaNQPUsQEGu11EZVrvl7oQ-De55o",
    authDomain: "assignment4-18175.firebaseapp.com",
    databaseURL: "https://assignment4-18175.firebaseio.com",
    projectId: "assignment4-18175",
    storageBucket: "assignment4-18175.appspot.com",
    messagingSenderId: "670590121155",
    appId: "1:670590121155:web:6928ece1c12dc9e9db1e76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
