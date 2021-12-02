
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_DEV_APIKEY,
  authDomain: process.env.REACT_APP_DEV_AUTHDOMAIN,
  projectId: process.env.REACT_APP_DEV_PROJECTID,
  storageBucket: process.env.REACT_APP_DEV_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_DEV_APPID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;
