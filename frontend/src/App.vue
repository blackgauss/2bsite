<template>
  <main class="container">
    <div class="logo">2b.</div>
    <h1>this weekend with b.</h1>

    <div class="weekend">
      <EventBox
        v-for="event in weekend"
        :key="event.day"
        :event="event"
      />
    </div>

    <DonationBox />

    <NewsBanner :items="newsItems" />
  </main>
</template>

<script>
import EventBox from './components/EventBox.vue';
import DonationBox from './components/DonationBox.vue';
import NewsBanner from './components/NewsBanner.vue';

export default {
  components: {
    EventBox,
    DonationBox,
    NewsBanner
  },
  data() {
    return {
      weekend: [
        {
          day: "Friday",
          title: "Kickback & card games",
          time: "8:00 PM",
          location: "Brian's place",
          invited: "everyone",
          request: "drinks and your Uno skills",
          vibe: "chill & funny",
          sobriety: 3,
          audience: "mostly close friends",
          brian: "Homebody Brian"
        },
        {
          day: "Saturday",
          title: "DJ night at the plaza",
          time: "10:00 PM",
          location: "Bryant Street Plaza",
          invited: "friends + friends of friends",
          request: "your dancing shoes",
          vibe: "high energy",
          sobriety: 7,
          audience: "mixed crew, late crowd",
          brian: "Party Brian"
        },
        {
          day: "Sunday",
          title: "Sunset picnic and poetry",
          time: "5:00 PM",
          location: "Malcolm X Park",
          invited: "open invite",
          request: "snacks and a poem",
          vibe: "soft, sweet, reflective",
          sobriety: 1,
          audience: "artists, lovers, picnic people",
          brian: "Romantic Brian"
        }
      ],
      newsItems: [
        "Brian is considering a rooftop brunch for next weekend",
        "Meridian Hill Park might be the new Sunday spot",
        "Bring your own blanket is still the rule!",
        "New faces welcome — ask Brian for the invite link"
      ]
    };
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #000;
  font-family: system-ui, sans-serif;
  color: #fff;
  padding-bottom: 3rem;
}

.container {
  padding: 1rem;
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
}

.weekend {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logo {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.5rem;
}
</style>
