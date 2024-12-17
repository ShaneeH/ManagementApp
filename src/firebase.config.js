// firebase.config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';


const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get references to Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Export the necessary services and functions for use in other parts of your application
export { auth, db, createUserWithEmailAndPassword, sendEmailVerification };
