import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATCAOXlPaQ77ItDw0D5aNDootlvwJQ_Os",
  authDomain: "fir-tutorial-9f571.firebaseapp.com",
  projectId: "fir-tutorial-9f571",
  storageBucket: "fir-tutorial-9f571.appspot.com",
  messagingSenderId: "432183119952",
  appId: "1:432183119952:web:8da2627e72300f2a4e4155"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);