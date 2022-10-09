// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAm1FJmp3zEaGL_77YR7kKEwdp4g-S1Qs",
  authDomain: "chat-app2-eb783.firebaseapp.com",
  projectId: "chat-app2-eb783",
  storageBucket: "chat-app2-eb783.appspot.com",
  messagingSenderId: "716447519687",
  appId: "1:716447519687:web:f8451f1b3b54e7e640bfe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)