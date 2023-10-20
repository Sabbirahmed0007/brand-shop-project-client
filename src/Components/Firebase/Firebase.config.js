// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeeUlWRfXHuqMT32pSGlpCd-8-cfHdUjQ",
  authDomain: "brand-store-project.firebaseapp.com",
  projectId: "brand-store-project",
  storageBucket: "brand-store-project.appspot.com",
  messagingSenderId: "1095075121637",
  appId: "1:1095075121637:web:49443927d8b720e2db870c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;