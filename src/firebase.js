// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: "porte-folio-mathieu-s.firebaseapp.com",
	projectId: "porte-folio-mathieu-s",
	storageBucket: "porte-folio-mathieu-s.appspot.com",
	messagingSenderId: import.meta.env.VITE_SENDERID,
	appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
