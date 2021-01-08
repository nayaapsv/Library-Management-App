import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCjU3zTEAIo9qHgHkVLgTiQaDp7gdT6cbo",
    authDomain: "book-worm-library.firebaseapp.com",
    projectId: "book-worm-library",
    storageBucket: "book-worm-library.appspot.com",
    messagingSenderId: "609328890456",
    appId: "1:609328890456:web:9b40de6a65eafde1c2002d"
  };

  firebase.initializeApp(firebaseConfig);
export default  firebase.firestore()