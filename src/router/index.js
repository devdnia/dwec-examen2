import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AboutMeView from '../pages/AboutMeView.vue'
import Receptes from '../pages/ReceptesView.vue'

 const routes = [
 {
     path: '/',
     name: 'Home',
     component: HomeView
 },
 {
     path: '/receptes',
     name: 'Receptes',
     component: Receptes
 },
 {
    path: '/aboutme',
    name: 'AboutMe',
    component: AboutMeView
},
{
    path: '/recepta/:id',
    name: 'Recepta',
    component: () => import(/* webpackChunkName: "Recepta id" */ '../components/Recepta')
},
{
    path: '/editarecepta/:id',
    name: 'editarecepta',
    component: () => import(/* webpackChunkName: "EditaRecepta id" */ '../components/EditaRecepta')
},
{
    path: '/nuevarecepta',
    name: 'nuevarecepta',
    component: () => import(/* webpackChunkName: "NuevaRecepta */ '../components/NuevaRecepta')
},

 ]

 const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
 })

 export default router