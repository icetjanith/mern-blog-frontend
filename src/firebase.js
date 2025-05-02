// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-5e546.firebaseapp.com",
    projectId: "mern-blog-5e546",
    storageBucket: "mern-blog-5e546.firebasestorage.app",
    messagingSenderId: "1016028626965",
    appId: "1:1016028626965:web:ef62ee0de074f54a6c8e1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);