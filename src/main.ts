// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Update import statement

createApp(App)
  .use(router)
  .mount('#app');