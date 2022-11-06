import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyDK1kgVoEHNteXahKuXIeVq8-Jjt5pQpR4",
  authDomain: "evening-project.firebaseapp.com",
  projectId: "evening-project",
  storageBucket: "evening-project.appspot.com",
  messagingSenderId: "643368343970",
  appId: "1:643368343970:web:d34322421f8e049059fafb",
};

const app = initializeApp(config);
export const db = getFirestore(app);
export const auth = getAuth(app);
