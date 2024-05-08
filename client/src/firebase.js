// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b560b.firebaseapp.com",
  projectId: "mern-blog-b560b",
  storageBucket: "mern-blog-b560b.appspot.com",
  messagingSenderId: "511364855545",
  appId: "1:511364855545:web:c148fe2bba27b129b05428"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);