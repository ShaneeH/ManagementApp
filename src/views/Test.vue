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
    // Capture the photo
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl, // Get the photo as a data URL
      source: CameraSource.Camera, // Use the device's camera
    });

    // Fetch geolocation
    const coordinates = await getCurrentLocation();

    // Compress the image and add geolocation text
    photo.value = await compressAndOverlay(image.dataUrl, coordinates);
  } catch (error) {
    console.error('Error capturing photo or fetching location:', error);
  }
};

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Geolocation is not supported by this browser.');
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude.toFixed(6),
          longitude: position.coords.longitude.toFixed(6),
        });
      },
      (error) => {
        reject('Unable to retrieve location: ' + error.message);
      }
    );
  });
};

//PUT THIS INTO A SERVICE.JS !
const compressAndOverlay = (dataUrl, coordinates) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const maxWidth = 800; // Maximum width for the compressed image
      const scale = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * scale;

      // Draw the image to the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Add geolocation text
      ctx.font = '20px Arial';
      ctx.fillStyle = 'red';
      const text = `Lat: ${coordinates.latitude}, Long: ${coordinates.longitude}`;
      ctx.fillText(text, 10, 30); // Add the text to the top-left corner

      // Get the compressed image as a data URL
      resolve(canvas.toDataURL('image/jpeg', 0.8)); // Adjust quality (0.8) for compression
    };

    img.src = dataUrl;
  });
};
</script>
