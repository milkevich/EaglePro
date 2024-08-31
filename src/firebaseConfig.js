import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCvPmAWxzLmJfJK-qa51UdkjrfSLVK6DVY",
  authDomain: "eaglepro-1c1e8.firebaseapp.com",
  projectId: "eaglepro-1c1e8",
  storageBucket: "eaglepro-1c1e8.appspot.com",
  messagingSenderId: "731833263897",
  appId: "1:731833263897:web:6c4ac691bb2cf0043e8788",
  measurementId: "G-LRWX79FN6C"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)