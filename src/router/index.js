import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        //将主页面设置会个人页面（后面可以调整）
        path: '/',
        name: 'index',
        component: () => import( '../components/ActivityView.vue')
    },
    {
         path: '/activity',
         name: 'activity',
         component: () => import( '../components/ActivityView.vue')
     },
     {
        path: '/person',
        name: 'person',
        component: () => import( '../components/PersonView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( '../components/LoginView.vue')
    },
    {
        path: '/appointment',
        name: 'appointment',
        component: () => import( '../components/AppointmentView')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
