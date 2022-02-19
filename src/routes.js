import { createWebHistory,createRouter } from "vue-router" 
import HomeRouter from "./components/HomeRouter.vue"
import  ProfileRouter from './components/ProfileRouter.vue'
import LoginRouter from './components/LoginRouter.vue'

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
        path:'/profile',
        component:ProfileRouter,
    },
]
const router =createRouter({
    history:createWebHistory(),
    routes
})
export default router