// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqblRo1f63NBcSv2V1Vo7c0A1QftMk60I",
  authDomain: "dresses-inventory.firebaseapp.com",
  projectId: "dresses-inventory",
  storageBucket: "dresses-inventory.appspot.com",
  messagingSenderId: "481433794205",
  appId: "1:481433794205:web:85903d3420a0be7d530674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;