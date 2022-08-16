import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/index.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
      requireAuth: true,
    },
    children: [
      {
        path: "/line",
        name: "Line",
        component: () => import("../views/Home/Line/index.vue"),
        meta: {
          title: "折线图",
          requireAuth: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
