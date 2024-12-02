import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contador',
      component: () => import('@/modules/spa/views/ContadorView.vue'),
    },
    {
      path: '/padrehijo',
      name: 'padre',
      component: () => import('@/modules/spa/views/PadreHijoView.vue'),
    },
  ],
});

export default router;
