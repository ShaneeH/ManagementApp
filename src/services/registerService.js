import { auth, db, createUserWithEmailAndPassword, sendEmailVerification } from '../firebase.config';
import { doc, setDoc, collection } from 'firebase/firestore';

export default {
  async register(name, email, password, role) {
    try {
      console.log('Register service called');
      console.log('Input:', { name, email, password, role });

      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered successfully, ensure you confirm youre email:', user);

      // Send email verification
      await sendEmailVerification(user);
      console.log('Verification email sent.');

      // Reference to the "users" collection in Firestore
      const userRef = doc(collection(db, 'users'), user.uid);

      // Store user data in Firestore, including role and email verification status
      await setDoc(userRef, {
        name,
        email,
        role,
        emailVerified: false, // Email verification tracking
      });

      // Return success response
      return {
        success: true,
        message: 'Registration successful! Please check your email to verify your account.',
      };
    } catch (error) {
      console.error('Registration error:', error);

      // Map Firebase error codes to user-friendly messages
      const errorMessages = {
        'auth/email-already-in-use': 'The email address is already in use. Please use a different email.',
        'auth/weak-password': 'The password is too weak. Please use a stronger password.',
        'auth/invalid-email': 'The email address is invalid. Please enter a valid email.',
        'auth/too-many-requests': 'Too many requests. Please try again later.',
        'auth/operation-not-allowed': 'Email/password sign-in is not enabled. Please contact your administrator.',
        'auth/network-request-failed': 'Network error. Please check your internet connection.',
      };

      // Return the mapped error message or a generic fallback
      return {
        success: false,
        errorMessage: errorMessages[error.code] || 'An unexpected error occurred. Please try again.',
      };
    }
  },
};
