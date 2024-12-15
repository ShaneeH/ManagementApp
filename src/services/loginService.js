import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Service to handle email/password login
export async function login(email, password) {
  try {
    console.log("Attempting to login:", email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Login successful:", user);
    return user; // Return the user data for further processing
  } catch (e) {
    console.error(`Problem with loginService:\n ${e.message}`);
    throw e; // Rethrow the error for the caller to handle
  }
}
