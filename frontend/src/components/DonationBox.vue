<template>
    <div class="donate-box">
      <button @click="showQR = true">Contribute!</button>
      <transition name="fade">
        <div v-if="showQR" class="qr-wrapper">
          <img
            class="qr"
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=2b.site"
            alt="Donate QR Code"
          />
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "DonationBox",
    data() {
      return {
        showQR: false
      };
    }
  };
  </script>
  
  <style scoped>
  .donate-box {
    margin-top: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  button {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #ccc;
  }
  
  .qr-wrapper {
    margin-top: 1rem;
  }
  
  .qr {
    width: 200px;
    height: 200px;
    border-radius: 16px;
  }
  
  /* Fade animation */
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-to {
    opacity: 1;
  }
  </style>
  