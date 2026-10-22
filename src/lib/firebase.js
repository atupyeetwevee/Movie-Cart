// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSNnu6EYy-CcFCDydbBxkLaNP442LxA1Y",
  authDomain: "movie-cart-c10fe.firebaseapp.com",
  projectId: "movie-cart-c10fe",
  storageBucket: "movie-cart-c10fe.firebasestorage.app",
  messagingSenderId: "1041617494982",
  appId: "1:1041617494982:web:0f4ed4e557dce0c821c8c7",
  measurementId: "G-5EHMKTDTFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
