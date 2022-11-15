import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/Chart.vue";
import User from "@/components/User.vue";
import Usernew from "@/components/Usernew.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chart",
    name: "About",
    component: About,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/inuser",
    name: "Usernew",
    component: Usernew,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

 