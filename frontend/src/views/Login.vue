<template>
    <div class="login">
      <h2>Enter Password</h2>
      <input v-model="password" placeholder="Enter 123" />
      <button @click="login">Login</button>
  
      <p v-if="error" style="color:red;">Wrong password.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: '',
        error: false,
      };
    },
    methods: {
      async login() {
        this.error = false;
        try {
          const res = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: this.password }),
          });
          const data = await res.json();
          if (data.success) {
            this.$router.push('/success');
          } else {
            this.error = true;
          }
        } catch {
          this.error = true;
        }
      },
    },
  };
  </script>
  