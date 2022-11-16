import { createWebHistory, createRouter } from "vue-router";
/*import Home from "@/components/Home.vue";
import About from "@/components/Chart.vue";
import User from "@/components/User.vue";
import Usernew from "@/components/Usernew.vue";*/



import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
//import Register from "@/components/Register.vue";
// lazy-loaded
const Profile = () => import("@/components/Profile.vue")
/*const BoardAdmin = () => import("@/components/BoardAdmin.vue")
const BoardModerator = () => import("@/components/BoardModerator.vue")
const BoardUser = () => import("@/components/BoardUser.vue")*/


import User from "@/components/User.vue";
import Usernew from "@/components/Usernew.vue";
import Chart from "@/components/Chart.vue";

/*const routes = [
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
];*/


const routes = [
  {
    path: "/",
    name: "profile",
    component: Profile,
  },
  {
    path: "/home",
    component: Profile,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "profile",
    // lazy-loaded
    component: Profile,
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
  {
    path: "/chart",
    name: "Chart",
    component: Chart,
  }
];












const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

 