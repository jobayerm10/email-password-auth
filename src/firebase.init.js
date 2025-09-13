// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbvN27eH7uWmRD-BDnWFK5BfeEfUqVi50",
  authDomain: "email-password-auth-7a7ba.firebaseapp.com",
  projectId: "email-password-auth-7a7ba",
  storageBucket: "email-password-auth-7a7ba.firebasestorage.app",
  messagingSenderId: "233730403208",
  appId: "1:233730403208:web:36a58a574451ab426fe83d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
