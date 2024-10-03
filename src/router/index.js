import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/main",
    name: "main",
    component: () => import("../components/MainPage.vue"),
  },
  {
    path: "/main/:id",
    name: "main/id",
    component: () => import("../components/MainPage.vue"),
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

