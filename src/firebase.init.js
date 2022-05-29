
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Nk9GPSm8zWyKDQiRzjBARhgX8DEd9NY",
  authDomain: "inventory-management-57f4d.firebaseapp.com",
  projectId: "inventory-management-57f4d",
  storageBucket: "inventory-management-57f4d.appspot.com",
  messagingSenderId: "438385520649",
  appId: "1:438385520649:web:2a94129c4fbb8713aa48d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
