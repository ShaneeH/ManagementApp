<template>
        <!-- Login Form -->
        <form @submit.prevent="loginUser">
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input type="email" v-model="loginEmail" required />
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Password</ion-label>
            <ion-input type="password" v-model="loginPassword" required />
          </ion-item>
          <ion-button expand="block" type="submit">Login</ion-button>
        </form>  
  </template>
  
  <script setup>
  import { ref } from "vue";
  import loginService from "../services/loginService";

  
  import {
    IonInput,
    IonLabel
  } from '@ionic/vue';

  // Login form data
  const loginEmail = ref("");
  const loginPassword = ref("");
  
  // Methods
  const loginUser = () => {
    //Send Form Data to 'loginService.js : login()'
      try {
        loginService.login(loginEmail.value, loginPassword.value);
      } catch (error) {
         console.log(error);
      }

  };
  </script>
  
  <style scoped>
  ion-segment {
    margin-bottom: 20px;
  }
  </style>
  