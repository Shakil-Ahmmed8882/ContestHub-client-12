// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7xdY_1cu0PbtYQCZ9N0O0OYia-BCMoxo",
  authDomain: "contestcraft-350e1.firebaseapp.com",
  projectId: "contestcraft-350e1",
  storageBucket: "contestcraft-350e1.appspot.com",
  messagingSenderId: "434529109599",
  appId: "1:434529109599:web:cec53ddfe77f87832bfdea"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
