// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDk-4ykan9z3yrxrsW4fApCtCwPtHsZfqs",
//   authDomain: "hospital-9fa17.firebaseapp.com",
//   projectId: "hospital-9fa17",
//   storageBucket: "hospital-9fa17.firebasestorage.app",
//   messagingSenderId: "489756851898",
//   appId: "1:489756851898:web:543b5bccedce7c9ccc0c83"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

// // export default firebaseConfig;
// export {app};
// export {auth};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
export default firebaseConfig