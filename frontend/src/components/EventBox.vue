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
  
      <button class="calendar-btn" @click="downloadCalendarEvent">
        📅 Add to Calendar
      </button>
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
    },
    methods: {
      downloadCalendarEvent() {
        const { title, time, location, day } = this.event;
  
        const now = new Date();
        const dayMap = { Friday: 5, Saturday: 6, Sunday: 0 };
        const date = new Date(now);
        date.setDate(now.getDate() + ((7 + dayMap[day] - now.getDay()) % 7));
        const [hour, minute] = time.replace(/(AM|PM)/, "").split(":").map(Number);
        const isPM = time.includes("PM") && hour !== 12;
        date.setHours(hour + (isPM ? 12 : 0), minute || 0, 0);
  
        const dtStart = date.toISOString().replace(/[-:]/g, "").split(".")[0];
        const dtEnd = new Date(date.getTime() + 2 * 60 * 60 * 1000) // +2hr
          .toISOString().replace(/[-:]/g, "").split(".")[0];
  
        const ics = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "BEGIN:VEVENT",
          `SUMMARY:${title}`,
          `DTSTART:${dtStart}Z`,
          `DTEND:${dtEnd}Z`,
          `LOCATION:${location}`,
          "DESCRIPTION:Made with 2b.site",
          "END:VEVENT",
          "END:VCALENDAR"
        ].join("\r\n");
  
        const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${title.replace(/\s+/g, "_")}.ics`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
  
  .calendar-btn {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    background-color: #fff;
    color: #000;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .calendar-btn:hover {
    background-color: #ccc;
  }
  </style>
  