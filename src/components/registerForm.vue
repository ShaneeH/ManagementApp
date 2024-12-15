<template>
        <!-- Register Form -->
        <form @submit.prevent="registerUser">
          <ion-item>
            <ion-label position="stacked">Name</ion-label>
            <ion-input type="text" v-model="registerName" required />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input type="email" v-model="registerEmail" required />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Password</ion-label>
            <ion-input type="password" v-model="registerPassword" required />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Confirm Password</ion-label>
            <ion-input type="password" v-model="confirmPassword" required />
          </ion-item>
          <ion-item>
            <ion-label>Role</ion-label>
            <ion-select v-model="userRole" interface="popover">
              <ion-select-option value="owner">Organization Owner</ion-select-option>
              <ion-select-option value="employee">Employee</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-button expand="block" type="submit">Register</ion-button>
        </form>
 
  
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { register } from '../services/registerService';

  
  import {
    IonInput,
    IonLabel
  } from '@ionic/vue';
  

  
  // Register form data
  const registerName = ref("");
  const registerEmail = ref("");
  const registerPassword = ref("");
  const confirmPassword = ref("");
  const userRole = ref("employee"); // Default to employee
  

  const registerUser = () => {
    if (registerPassword.value !== confirmPassword.value) {
      console.log("Passwords do not match!");
      alert('Password do not match');
      return;
    }
  
    register(registerName.value, registerEmail.value, registerPassword.value, userRole.value);
  
  };
  
  
  </script>
  
  <style scoped>
  ion-segment {
    margin-bottom: 20px;
  }
  </style>
  