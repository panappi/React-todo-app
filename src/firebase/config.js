// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  apiKey: "AIzaSyCI07WqmD7zawoUje77wqkus37-soYWPOo",
  authDomain: "todo-app-d4eab.firebaseapp.com",
  projectId: "todo-app-d4eab",
  storageBucket: "todo-app-d4eab.appspot.com",
  messagingSenderId: "520063091266",
  appId: "1:520063091266:web:2b8f64f420ac236893a3db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
