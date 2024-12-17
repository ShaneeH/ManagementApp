<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Auth erer@g.com   bigboyHel#4545</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <!-- Toggle Between Login and Register Forms -->
      <ion-segment v-model="authType" value="login" @ionChange="toggleAuth">
        <ion-segment-button value="login"> Login</ion-segment-button>
        <ion-segment-button value="register">Register </ion-segment-button>
      </ion-segment>

      <!-- Display Login Form -->
      <div v-if="authType">
        <loginForm />
      </div>

      <!-- Display Register Form -->
      <div v-if="!authType">
        <registerForm />
      </div>


    <Test />
    </ion-content>
  </ion-page>

  
</template>

<script setup>
import { ref } from "vue";
import loginForm from "../components/loginForm.vue";
import registerForm from "../components/registerForm.vue";
import Test from "./Test.vue";


const authType = ref(true); // true for login, false for register
const toggleAuth = () => {
  authType.value = !authType.value;
};



</script>
