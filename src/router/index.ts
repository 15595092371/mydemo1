import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/work",
          name: "work",
          component: () => import("../views/work.vue"),
        },
        {
          path: "/list",
          name: "list",
          component: () => import("../views/list.vue"),
        },
      ],
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
  ],
});

export default router;
