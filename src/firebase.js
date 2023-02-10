// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA07xHHZedKCphJAIjSjn2-FXbAAsFsJds",
	authDomain: "porte-folio-mathieu-s.firebaseapp.com",
	projectId: "porte-folio-mathieu-s",
	storageBucket: "porte-folio-mathieu-s.appspot.com",
	messagingSenderId: "788808672234",
	appId: "1:788808672234:web:bff2d86c474cfc177fc893",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
