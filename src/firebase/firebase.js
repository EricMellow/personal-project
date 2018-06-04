import { firebaseKey } from '../keys';
import * as firebase from 'firebase';
const key = firebaseKey;


var config = {
  apiKey: key,
  authDomain: "team-up-205121.firebaseapp.com",
  databaseURL: "https://team-up-205121.firebaseio.com",
  projectId: "team-up-205121",
  storageBucket: "team-up-205121.appspot.com",
  messagingSenderId: "1006505028992"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };