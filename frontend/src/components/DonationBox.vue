<template>
    <div class="overlay" @click.self="$emit('close')">
      <div class="popup">
        <button class="close-btn" @click="$emit('close')">❌</button>
        <p><strong>Support the vibes 💖</strong></p>
        <img
          class="qr"
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bitcoin:fakeaddress123"
          alt="Donation QR"
        />
        <p><strong>BTC:</strong> fakeBTCaddress123</p>
        <p><strong>ETH:</strong> fakeETHaddress456</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DonationBox"
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 3rem;
    animation: fadeIn 0.3s ease;
  }
  
  .popup {
    background: #111;
    border: 1px solid #333;
    border-radius: 1rem;
    padding: 1.5rem;
    text-align: center;
    color: #fff;
    position: relative;
    max-width: 90%;
    width: 300px;
    animation: slideDown 0.3s ease;
  }
  
  .qr {
    margin: 0.75rem 0;
    width: 200px;
    height: 200px;
  }
  
  .close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.75rem;
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    color: #fff;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideDown {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  </style>
  