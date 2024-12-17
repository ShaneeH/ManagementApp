<template>
  <ion-page>

   
        <ion-title>Camera Test</ion-title>


    <ion-content class="ion-padding">
      <h3>Take a Selfie</h3>

      <!-- Button to open camera -->
      <ion-button @click="takeSelfie">Open Camera</ion-button>

      <!-- Display captured photo -->
      <div v-if="photo">
        <h4>Your Selfie:</h4>
        <img :src="photo" alt="Captured Selfie" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const photo = ref(null);

const takeSelfie = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl, // Get the photo as a data URL
      source: CameraSource.Camera, // Use the device's camera
    });

    photo.value = image.dataUrl; // Save the captured photo
  } catch (error) {
    console.error('Error capturing photo:', error);
  }
};
</script>
