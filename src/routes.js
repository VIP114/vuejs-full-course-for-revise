import { createWebHistory,createRouter } from "vue-router" 
import HomeRouter from "./components/HomeRouter.vue"
import  ProfileRouter from './components/ProfileRouter.vue'
import LoginRouter from './components/LoginRouter.vue'
import PageNotFound37 from './components/PageNotFound37.vue'
const routes =[
    {
        name:'Home',
        path:'/',
        component:HomeRouter,
    },
    {
        name:'Login',
        path:'/login',
        component:LoginRouter,
    },
    {
        name:'profile',
        path:'/profile/',
        component:ProfileRouter,
    },
    {
        name:'NotFound',
        path:'/:pathMatch(.*)*',
        component:PageNotFound37,
    },
]
const router =createRouter({
    history:createWebHistory(),
    routes
})
export default router