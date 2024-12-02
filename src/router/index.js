import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/spa/views/TestVista.vue'),
    },
    {
      path: '/contador',
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
