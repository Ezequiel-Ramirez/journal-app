import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKCe8xauk_aaxEDjdhyIAZGDsGw6-kGQQ",
    authDomain: "react-app-curso-expert.firebaseapp.com",
    projectId: "react-app-curso-expert",
    storageBucket: "react-app-curso-expert.appspot.com",
    messagingSenderId: "60290059496",
    appId: "1:60290059496:web:b719d3ae3685faf601cd5d"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    firebase,
    googleAuthProvider
}