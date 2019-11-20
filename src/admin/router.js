import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import store from "./store"

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      component: () => import("./components/pages/aboutme.vue"),
      meta: {
        title: 'Блок "Обо мне"'
      }
   },
   {
      path: '/works',
      component: () => import("./components/pages/works.vue"),
      meta: {
        title: 'Блок "Работы"'
      }
   },
   {
      path: '/reviews',
      component: () => import("./components/pages/reviews.vue"),
      meta: {
        title: 'Блок "Отзывы"'
      }
   },
   {
      path: '/login',
      component: () => import("./components/pages/authorization.vue"),
      meta: {
        public: true
      }
   }
];

const router = new VueRouter({ routes });

const baseURL = "https://webdev-api.loftschool.com/";

const quard = axios.create({
  baseURL
})



router.beforeEach(async(to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogin = store.getters["user/userIsLogged"];

  if (isPublicRoute === false && isUserLogin === false) {
    const token = localStorage.getItem("token");
    quard.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      const response = await quard.get('/user');
      store.commit("user/SET_USER", response.data.user)
      next();
    } catch (error) {
      router.replace('/login');
      localStorage.removeItem("token");
    }
  } else {
    next();
  }
 
})

export default router;

