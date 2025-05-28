<template>
  <main class="container">
    <div class="logo">2b.</div>
    <h1>b. today</h1>
    <p>
      b. is doing <strong>{{ event.title }}</strong> today at 
      <strong>{{ event.time }}</strong> at 
      <strong>{{ event.location }}</strong> and 
      <strong>{{ event.invited }}</strong> is invited.
      Please bring <strong>{{ event.request }}</strong>.
    </p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      event: {
        title: "a cookout and field games",
        time: "3:00 PM",
        location: "Malcolm X Park",
        invited: "everyone",
        request: "drinks and good vibes"
      }
    };
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background-color: #000;
  color: #fff;
}

.container {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.logo {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.5rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

strong {
  font-weight: bold;
}
</style>
