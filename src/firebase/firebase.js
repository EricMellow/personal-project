import { firebaseKey } from '../keys';
import * as firebase from 'firebase';
const key = firebaseKey;
// Initialize Firebase
var config = {
  apiKey: key,
  authDomain: "personal-project-1527122816740.firebaseapp.com",
  databaseURL: "https://personal-project-1527122816740.firebaseio.com",
  projectId: "personal-project-1527122816740",
  storageBucket: "",
  messagingSenderId: "182263229649"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };