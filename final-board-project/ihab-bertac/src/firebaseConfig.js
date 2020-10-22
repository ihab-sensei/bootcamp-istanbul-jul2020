import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA8d6slVcqHL0sKdnhFFQVC5f7Zp5T5AYU",
  authDomain: "weeklyworkoutplannerdb.firebaseapp.com",
  databaseURL: "https://weeklyworkoutplannerdb.firebaseio.com",
  projectId: "weeklyworkoutplannerdb",
  storageBucket: "weeklyworkoutplannerdb.appspot.com",
  messagingSenderId: "816755755892",
  appId: "1:816755755892:web:329260ecbc64cf6bd67a21"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
