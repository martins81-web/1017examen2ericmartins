import Vue from 'vue';
import VueRouter from 'vue-router';

import Accueil from '../views/Accueil.vue';
import Contact from '../views/Contact.vue';
import License from '../views/License.vue';
import Projet from '../views/Projet.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: Accueil,
      props: true
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projet,
      props: true
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      props: true
    },
    {
      path: "/licence",
      name: "Licence",
      component: License,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})


export default router
