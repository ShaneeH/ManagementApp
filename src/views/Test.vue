<template>
    <div>
  
            <ion-input type="text" :value="inputString" @input="updateString($event)" placeholder="Enter a string"></ion-input>
 
      <ion-button @click="logString">Log String</ion-button>
    </div>
  </template>
  
  <script setup>
  import { IonItem } from '@ionic/vue';
import { ref } from 'vue';
  
  const inputString = ref('');
  
  const updateString = (event) => {
    inputString.value = event.target.value;
  };
  
  const logString = () => {
    console.log(inputString.value);
  };
  </script>
  