import VueRouter from "vue-router"
import Vue from 'vue'


//懒加载页面
const Cart = ()=> import ('views/cart/Cart.vue')
const Category = ()=> import ('views/category/Category.vue')
const Home = ()=> import ('views/home/Home.vue')
const Profile = ()=> import ('views/profile/Profile.vue')

// 1.vue注册
Vue.use(VueRouter)


// 2.router对象创建

const routes = [
    {
        path:"",
        redirector:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    }
]

const route= new VueRouter({
    routes,
    mode:'history'
})

//3.export
export default router