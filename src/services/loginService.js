import { auth, db } from '../firebase.config';

export default {
  async login(email, password) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      // Store user data in local storage or Vuex if needed
      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
};


