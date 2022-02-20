import * as firebase from 'firebase/app';

import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCbnys2_ejmdppAurjJNRIXjz_ZsAnjJb8",
  authDomain: "gallery-f4b84.firebaseapp.com",
  projectId: "gallery-f4b84",
  storageBucket: "gallery-f4b84.appspot.com",
  messagingSenderId: "1001898784415",
  appId: "1:1001898784415:web:7b51ffc9c0515e9c14d4aa"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const db = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, db, timestamp }