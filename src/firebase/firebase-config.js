import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB-dc2wJzzw6FG2qHP2yqZ3R8dm_Jy1R9E",
  authDomain: "ecommerce-c2f86.firebaseapp.com",
  projectId: "ecommerce-c2f86",
  storageBucket: "ecommerce-c2f86.appspot.com",
  messagingSenderId: "611571980661",
  appId: "1:611571980661:web:3d8b0ba672a6ff3f5e9b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)