import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import aboutme from './components/pages/aboutme.vue';
import works from './components/pages/works.vue';
import reviews from './components/pages/reviews.vue';
import authorization from './components/pages/authorization.vue';

const routes = [
   {
      path: '/',
      component: aboutme
   },
   {
      path: '/works',
      component: works
   },
   {
      path: '/reviews',
      component: reviews
   },
   {
      path: '/login',
      component: authorization
   }
];

export default new VueRouter({ routes });