// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdJuwVL2v7hBJwq0TUi1Q2tY-BC2fYQg4",
  authDomain: "user-email-password-auth-b890b.firebaseapp.com",
  projectId: "user-email-password-auth-b890b",
  storageBucket: "user-email-password-auth-b890b.appspot.com",
  messagingSenderId: "76817014447",
  appId: "1:76817014447:web:2e893bcd9268ec6c1e3e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;