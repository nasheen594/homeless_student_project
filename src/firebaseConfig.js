// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpxowNK5oitnzw1bHam3aSSdWOXLgZddI",
  authDomain: "lab6-2de31.firebaseapp.com",
  projectId: "lab6-2de31",
  storageBucket: "lab6-2de31.appspot.com",
  messagingSenderId: "955768229916",
  appId: "1:955768229916:web:ed5f61f2841e34e38e8fd9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;