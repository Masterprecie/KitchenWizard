// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBXIykYWCdx8zM1pM4hVEhf-k4oDOeBBq4",
	authDomain: "kitchenwizzard-b63b2.firebaseapp.com",
	projectId: "kitchenwizzard-b63b2",
	storageBucket: "kitchenwizzard-b63b2.appspot.com",
	messagingSenderId: "674328093762",
	appId: "1:674328093762:web:49f33dd943c808a25839db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);