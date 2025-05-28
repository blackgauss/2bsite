<template>
    <div class="news-banner">
      <div class="scroll-text">
        <span v-for="(item, index) in items" :key="index">
          📰 {{ item }}&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewsBanner",
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .news-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    overflow: hidden;
    border-top: 1px solid #fff;
    white-space: nowrap;
    z-index: 1000;
  }
  
  .scroll-text {
    display: inline-block;
    padding-left: 100%;
    animation: scroll-left 30s linear infinite;
  }
  
  @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  