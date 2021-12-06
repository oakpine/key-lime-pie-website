// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPOZVapuv6UNJNBr_QVoLDkBP4ZV2PYqk",
  authDomain: "keylimepiewebsite.firebaseapp.com",
  databaseURL: "https://keylimepiewebsite-default-rtdb.firebaseio.com",
  projectId: "keylimepiewebsite",
  storageBucket: "keylimepiewebsite.appspot.com",
  messagingSenderId: "162671252448",
  appId: "1:162671252448:web:0f8700ffb4fe6e9b555185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
