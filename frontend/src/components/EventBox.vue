<template>
    <div class="event-card">
      <div class="day">{{ event.day.slice(0, 3).toUpperCase() }}</div>
      <div class="title">{{ event.title }}</div>
  
      <div class="info-line">
        🕒 {{ event.time }} &nbsp; • &nbsp; 📍 {{ event.location }}
      </div>
  
      <div class="info-line" v-if="event.request">
        🧺 {{ event.request }}
      </div>
  
      <div class="badges">
        <div class="badge">🌈 {{ event.vibe }}</div>
        <div class="badge">{{ "🍻".repeat(event.sobriety) }}</div>
        <div class="badge">👥 {{ event.audience }}</div>
        <div class="badge">👤 {{ event.brian }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "EventBox",
    props: {
      event: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .event-card {
    background: #111;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #fff;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  
  .day {
    font-size: 0.9rem;
    font-weight: bold;
    color: #aaa;
  }
  
  .title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    line-height: 1.2;
  }
  
  .info-line {
    font-size: 0.95rem;
    color: #ccc;
  }
  
  .badges {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-top: 0.6rem;
  }
  
  .badge {
    font-size: 0.85rem;
    background-color: #222;
    border: 1px solid #444;
    padding: 0.4rem 0.6rem;
    border-radius: 999px;
    color: #ccc;
    width: fit-content;
  }
  </style>
  