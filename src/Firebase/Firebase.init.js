// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9FeaQcn20NKuFfCN55Zijj4CSobVrLgk",
  authDomain: "smart-deals-6e106.firebaseapp.com",
  projectId: "smart-deals-6e106",
  storageBucket: "smart-deals-6e106.firebasestorage.app",
  messagingSenderId: "532523211386",
  appId: "1:532523211386:web:32abfc1196ce012e2379c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);