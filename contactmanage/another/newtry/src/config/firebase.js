// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj8r3lYkS0onOd8b0kuVjl4zb29geX9TM",
  authDomain: "my-proj-6b1c1.firebaseapp.com",
  projectId: "my-proj-6b1c1",
  storageBucket: "my-proj-6b1c1.firebasestorage.app",
  messagingSenderId: "334475140356",
  appId: "1:334475140356:web:e3f0e6ff23a6b61ed88451"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);