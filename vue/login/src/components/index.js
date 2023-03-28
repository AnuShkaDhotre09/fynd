import Helloworld from './components/Helloworld.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import product from './components/product_table.vue'
import About from './components/Aboutus.vue'
import Test from './components/Testing.vue'

const routes=[
    {
        name:'Helloworld',
        component:Helloworld,
        path:'/'
    },

    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'product',
        component:product,
        path:'/product'
    },
    {
        name:'Test',
        component:Test,
        path:'/test'
    },
    {
        name:'Aboutus',
        component:Aboutus,
        path:'/aboutus'
    },
   
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;