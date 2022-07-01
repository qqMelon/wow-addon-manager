import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
   {
    path: '/',
    redirect: { name: 'dashboard' }
   },
   {
    path: 'dashboard',
    component: () => import('./views/Dashboard.vue'),
    meta: {
        title: 'Tableau de bord'
    }
   }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;