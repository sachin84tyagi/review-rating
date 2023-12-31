// import firebase from "firebase/app";
// import "firebase/database";

// var firebaseConfig = {
//   apiKey: "AIzaSyC3E-BUmfu-Gck3G3qBu-hvApUNr6SHNRg",
//   authDomain: "react-contact-a1a83.firebaseapp.com",
//   databaseURL: "https://react-contact-a1a83-default-rtdb.firebaseio.com",
//   projectId: "react-contact-a1a83",
//   storageBucket: "react-contact-a1a83.appspot.com",
//   messagingSenderId: "867876835770",
//   appId: "1:867876835770:web:604fb145b343ec02ca0d83",
// };
// // Initialize Firebase
// const fireDb = firebase.initializeApp(firebaseConfig);

// export default fireDb.database().ref();

import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBERl-LZs5bTA0xhaWz5OsteQK0Q6nEYKI",
  authDomain: "review-43a96.firebaseapp.com",
  databaseURL: "https://review-43a96-default-rtdb.firebaseio.com",
  projectId: "review-43a96",
  storageBucket: "review-43a96.appspot.com",
  messagingSenderId: "487800168392",
  appId: "1:487800168392:web:f2f1718740c26648b36afd"
};

firebase.initializeApp(firebaseConfig)

const projectFireStore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFireStore, projectAuth }