
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2B1_iW5pZDEyuvtlj8JFqBbFlIPJCLWk",
  authDomain: "resturantapp-d618e.firebaseapp.com",
  projectId: "resturantapp-d618e",
  storageBucket: "resturantapp-d618e.appspot.com",
  messagingSenderId: "913433109138",
  appId: "1:913433109138:web:506c78a930c012c7453c4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
const db = getFirestore(app);
export { app,db,auth };