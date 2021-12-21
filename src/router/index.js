import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Almacen from '../views/vistaAlmacen.vue'
import Colegio from '../views/vistaColegio.vue'
import Producto from '../views/vistaProducto.vue'
import Carro from '../views/vistaCarro.vue'
import Colegios from '../views/vistaColegios'
import Pedidos from '../views/vistaPedidos.vue'
Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import( webpackChunkName: "about" '../views/About.vue')
  },*/
  {
    path:'/',
    name:'Inicio',
    component:Index
  },
  {
    path:'/almacen/:id/:nombre',
    name:'Almacen',
    component:Almacen
  },
  {
    path:'/colegio/:id',
    name:'Colegio',
    component:Colegio
  },
  {
    path:'/producto/:idColegio/:id/:nombre',
    name:'Producto',
    component:Producto
  },
  {
    path:'/cart',
    name: 'Cart',
    component: Carro
  },
  {
    path:"/colegios",
    name:'Colegios',
    component:Colegios
  },
  {
    path:'/pedidos',
    name:'Pedidos',
    component:Pedidos
  }
]

const router = new VueRouter({
  routes
})

export default router
