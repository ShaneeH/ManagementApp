// imageResize.js
export const compressAndOverlay = (dataUrl, coordinates) => {
    return new Promise((resolve, reject) => {
      try {
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
  
        img.onerror = () => reject('Failed to load the image.');
  
        img.src = dataUrl;
      } catch (error) {
        reject('Error in compressAndOverlay: ' + error.message);
      }
    });
  };
  