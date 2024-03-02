import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBfs7ptUrlJ9G42T01_IkdyzgvA7P9Bmt4",
    authDomain: "iiitpmentor.firebaseapp.com",
    projectId: "iiitpmentor",
    storageBucket: "iiitpmentor.appspot.com",
    messagingSenderId: "831578498116",
    appId: "1:831578498116:web:bb969a87fed0732fe3c811",
    databaseURL:"https://iiitpmentor-default-rtdb.firebaseio.com",
  };
  export const app=initializeApp(
    firebaseConfig
  );
  