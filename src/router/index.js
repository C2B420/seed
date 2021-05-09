import { createRouter, createWebHistory } from 'vue-router';

const PictureDisplay210509 = () => import('views/case/PictureDisplay210509');

const routes = [
  {
    path: '/pictureDisplay210509',
    name: '/pictureDisplay210509',
    component: PictureDisplay210509,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
