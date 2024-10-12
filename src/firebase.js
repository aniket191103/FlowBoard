// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_CIGAyyq1AoqVl1LRd4Pbgd8J_SOGzI8",
  authDomain: "flowchart-6e808.firebaseapp.com",
  projectId: "flowchart-6e808",
  storageBucket: "flowchart-6e808.appspot.com",
  messagingSenderId: "319004703253",
  appId: "1:319004703253:web:bf898e078853689f32ec1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

// Connect to emulators in development mode
if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);  // Corrected port here
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}
