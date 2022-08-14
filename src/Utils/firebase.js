import firebase from "firebase/app";
import "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyA_zgHY1mO3-GFjnjgAAnkmrmuyE8TVt1I",
    authDomain: "fir-vue-tes.firebaseapp.com",
    projectId: "fir-vue-tes",
    storageBucket: "fir-vue-tes.appspot.com",
    messagingSenderId: "411222402216",
    appId: "1:411222402216:web:11bd24bda1f36404560e9d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };

