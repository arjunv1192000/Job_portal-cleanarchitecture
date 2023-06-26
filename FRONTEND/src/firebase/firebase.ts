
import { FirebaseApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD7P4fYKyqQQj2tKr1BGZn-rICv_bxQXP4",
  authDomain: "hire-x-387810.firebaseapp.com",
  projectId: "hire-x-387810",
  storageBucket: "hire-x-387810.appspot.com",
  messagingSenderId: "18104366941",
  appId: "1:18104366941:web:7abfee3a145dfa267e5ab4",
  measurementId: "G-JEYG49R1CX"
}; 


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth}


