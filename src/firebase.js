import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJXTLaBHyyJwyFvmlusWnK9vv1AaoLUzU",
  authDomain: "clozzet-dc97b.firebaseapp.com",
  projectId: "clozzet-dc97b",
  storageBucket: "clozzet-dc97b.firebasestorage.app",
  messagingSenderId: "552418353975",
  appId: "1:552418353975:web:cc355d32ee24b01ac4f0b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
