import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/home.vue"),
    },
    {
      path: "/faqs",
      name: "FAQ",
      component: () => import("./components/FAQ.vue"),
    },
    {
      path: "/teams",
      name: "team",
      component: () => import("./components/teams.vue"),
    },
    {
      path: "/wallet-checker",
      name: "wallet-checker",
      component: () => import("./components/wallet-checker.vue"),
    },
    // {
    //   path: "/collection",
    //   name: "collection",
    //   component: () => import("../components/collection.vue"),
    // },
  ],
});

export default router;
