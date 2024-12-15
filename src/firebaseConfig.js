// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import other Firebase services as needed (e.g., Firestore, Storage)

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyALmO78zr6UlHPOE5RB5L05Zp1hCc2xM0I",
  authDomain: "ionicapp-d7a20.firebaseapp.com",
  projectId: "ionicapp-d7a20",
  storageBucket: "ionicapp-d7a20.firebasestorage.app",
  messagingSenderId: "259866494974",
  appId: "1:259866494974:web:0d7dc3008e4eec28e2e2af",
  measurementId: "G-DH5SP03WB1", // Optional, remove if not using Analytics
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app); // For Firebase Authentication
// Add other service exports here if needed (e.g., Firestore, Storage)

// Export the Firebase app instance (optional, if needed elsewhere)
export default app;
