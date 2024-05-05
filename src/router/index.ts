// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'; // Import RouteRecordRaw as a type only
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import Resume from '../views/Resume.vue';
import About from '../views/About.vue';
import Contact from '@/views/Contact.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
