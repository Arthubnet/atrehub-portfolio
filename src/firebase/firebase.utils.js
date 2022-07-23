import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
getAnalytics(initializeApp(firebaseConfig));
const db = getFirestore();

/* let colRef = collection(db, "users"); */

export let addCollection = async (name, email, message, uid) => {
  let createDate = new Date();
  try {
    await setDoc(doc(db, "users", uid), {
      name: name,
      email: email,
      message: message,
      createdAt: createDate,
    });
  } catch (error) {
    console.error(error);
  }
};
