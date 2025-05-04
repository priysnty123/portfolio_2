import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0_8TzuA-whktl0kNKAu_D4cGsIy1BfQI",
  authDomain: "portfolio-af58b-43d9c.firebaseapp.com",
  projectId: "portfolio-af58b-43d9c",
  storageBucket: "portfolio-af58b-43d9c.firebasestorage.app",
  messagingSenderId: "1066452823350",
  appId: "1:1066452823350:web:d41c875315a3ce6529d797",
  measurementId: "G-XJ8K5R8Q5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };