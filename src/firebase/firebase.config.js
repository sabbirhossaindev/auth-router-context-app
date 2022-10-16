// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ0G4nuFVvyr5f-ZNr7rcau1McFeBXLoE",
  authDomain: "auth-router-context-app-dff5e.firebaseapp.com",
  projectId: "auth-router-context-app-dff5e",
  storageBucket: "auth-router-context-app-dff5e.appspot.com",
  messagingSenderId: "216984313260",
  appId: "1:216984313260:web:f289bc64e02873e06cee09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;