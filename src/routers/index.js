import { createRouter, createWebHistory } from 'vue-router';
import homeComponent from '../components/homeComponent';
import aboutComponent from '../components/aboutComponent';
import underStructionComponent from '../components/underStructionComponent';
const routes = [
  { path: '/', component: homeComponent },
  { path: '/about', component: aboutComponent },
  { path: '/:catchAll(.*)', component: underStructionComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;