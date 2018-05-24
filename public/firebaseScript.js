import firebaseKey from '../src/keys';
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
firebase.initializeApp(config);