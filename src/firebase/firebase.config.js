// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ7gSTkscNn-eNf_nc9fC-OH8mWI50c3Q",
  authDomain: "aesthetic-pottery-client.firebaseapp.com",
  projectId: "aesthetic-pottery-client",
  storageBucket: "aesthetic-pottery-client.appspot.com",
  messagingSenderId: "76644025767",
  appId: "1:76644025767:web:258d2952da2fc91084e282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;