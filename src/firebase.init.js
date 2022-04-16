// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc4VPl5USRoFBUe6vuYN0sUbxAO1ifQWI",
    authDomain: "home-food-services-207b0.firebaseapp.com",
    projectId: "home-food-services-207b0",
    storageBucket: "home-food-services-207b0.appspot.com",
    messagingSenderId: "997593770419",
    appId: "1:997593770419:web:37224cfdc61067736bc3c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
