import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/detail/:id",
    name: "DetailView",
    component: () => import(/* webpackChunkName: "home" */ "@/App.vue"), //dynamic import of component and dependency
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
