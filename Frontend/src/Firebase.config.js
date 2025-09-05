// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCBgbyvqOHP36oPZbX0ONuIYCnRU13Y704",
  authDomain: "exam-e7fdc.firebaseapp.com",
  databaseURL: "https://exam-e7fdc-default-rtdb.firebaseio.com",
  projectId: "exam-e7fdc",
  storageBucket: "exam-e7fdc.firebasestorage.app",
  messagingSenderId: "1091744690847",
  appId: "1:1091744690847:web:f8ae8bf4f9e016b785a8aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default firebaseConfig