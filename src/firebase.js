// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMmqBC0q9DSg75MEOvnffp1OyXHqSJwUI",
  authDomain: "react-authentication-21c7c.firebaseapp.com",
  projectId: "react-authentication-21c7c",
  storageBucket: "react-authentication-21c7c.appspot.com",
  messagingSenderId: "879112520233",
  appId: "1:879112520233:web:c56e5685c50f8fe465d238",
  measurementId: "G-M2YD9J3BY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app