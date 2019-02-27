import Vue from 'vue'
import Router from 'vue-router'

const home =()=>import(/* webpackChunkName: "group-home" */ "@/components/home.vue");
const login =()=>import(/* webpackChunkName: "group-home" */ "@/components/login.vue");
const find =()=>import(/* webpackChunkName: "group-home" */ "@/components/find.vue");
const car =()=>import(/* webpackChunkName: "group-home" */ "@/components/car.vue");
const mine =()=>import(/* webpackChunkName: "group-home" */ "@/components/mine.vue");
const reg =()=>import(/* webpackChunkName: "group-home" */ "@/components/reg.vue");
const list =()=>import(/* webpackChunkName: "group-home" */ "@/components/list.vue");
const detail =()=>import(/* webpackChunkName: "group-home" */ "@/components/detail.vue");
const error =()=>import(/* webpackChunkName: "group-home" */ "@/components/error.vue");


Vue.use(Router)

let routes=[
  {path:'/home',component:home},
  {path:'/login',component:login},
  {path:'/find',component:find},
  {path:'/car',component:car},
  {path:'/mine',component:mine},
  {path:'/reg',component:reg},
  {path:'/list',component:list},
  {path:'/detail/:id',component:detail},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}
]
export default new Router({
  routes
})
