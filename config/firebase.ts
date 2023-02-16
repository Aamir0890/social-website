// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa8kcsThiXezF4ctO0LCWAWfJhhe7Ihi0",
  authDomain: "react-course-4f587.firebaseapp.com",
  projectId: "react-course-4f587",
  storageBucket: "react-course-4f587.appspot.com",
  messagingSenderId: "57022350740",
  appId: "1:57022350740:web:9e517a06850cafc57b7b81"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app)