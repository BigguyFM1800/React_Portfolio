import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-80JW3vwhtmE1JcrphMuB_bmlkzVXIeg",
    authDomain: "react-portfolio-contact-a58a0.firebaseapp.com",
    databaseURL: "https://react-portfolio-contact-a58a0-default-rtdb.firebaseio.com",
    projectId: "react-portfolio-contact-a58a0",
    storageBucket: "react-portfolio-contact-a58a0.appspot.com",
    messagingSenderId: "971416980359",
    appId: "1:971416980359:web:0fd77de2628682bc73e122"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database.ref();