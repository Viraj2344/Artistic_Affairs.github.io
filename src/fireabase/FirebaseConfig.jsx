// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJWdf1HR9OMmL0WWrvkBsjaEMvVwXDxZ8",
  authDomain: "artisticaffairs-bcca3.firebaseapp.com",
  projectId: "artisticaffairs-bcca3",
  storageBucket: "artisticaffairs-bcca3.appspot.com",
  messagingSenderId: "445567204765",
  appId: "1:445567204765:web:33d020620377069ba08374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}