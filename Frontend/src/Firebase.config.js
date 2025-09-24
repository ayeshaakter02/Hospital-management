// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDk-4ykan9z3yrxrsW4fApCtCwPtHsZfqs",
  authDomain: "hospital-9fa17.firebaseapp.com",
  databaseURL: "https://hospital-9fa17-default-rtdb.firebaseio.com",
  projectId: "hospital-9fa17",
  storageBucket: "hospital-9fa17.firebasestorage.app",
  messagingSenderId: "489756851898",
  appId: "1:489756851898:web:543b5bccedce7c9ccc0c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default firebaseConfig