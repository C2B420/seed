import { createRouter, createWebHistory } from 'vue-router';

const PictureDisplay210509 = () => import('views/case/PictureDisplay210509');
const ClockDisplay210513 = () => import('views/case/ClockDisplay210513');
const MenuDisplay210514 = () => import('views/case/MenuDisplay210514');

const routes = [
  {
    path: '/pictureDisplay210509',
    name: 'pictureDisplay210509',
    component: PictureDisplay210509,
  },
  {
    path: '/clockDisplay210513',
    name: 'clockDisplay210513',
    component: ClockDisplay210513,
  },
  {
    path: '/menuDisplay210514',
    name: 'menuDisplay210514',
    component: MenuDisplay210514,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
