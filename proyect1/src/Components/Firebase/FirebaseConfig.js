// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//metodo para conectar con firebase
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBJO0YwZA6x2uwzUnTRSWx3R-0fV6rkBo",
  authDomain: "shop-72473.firebaseapp.com",
  projectId: "shop-72473",
  storageBucket: "shop-72473.appspot.com",
  messagingSenderId: "705299137076",
  appId: "1:705299137076:web:70c0249bb62fbaa0d5c061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
