import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Success from '../views/Success.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/success', component: Success },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});