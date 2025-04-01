import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDNN5U9bAPoTVEYKXCbBLBCLmngXK9rz0c",
  authDomain: "prepbot-78aaa.firebaseapp.com",
  projectId: "prepbot-78aaa",
  storageBucket: "prepbot-78aaa.firebasestorage.app",
  messagingSenderId: "23987669789",
  appId: "1:23987669789:web:c64287afebd34b9a06aff4",
  measurementId: "G-N9HV3MLFLJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);