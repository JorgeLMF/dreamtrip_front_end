import { createWebHashHistory, createRouter } from "vue-router";
import Initial from "./views/Initial.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";

const routes = [
  { path: "/", name: "initial", component: Initial },
  { path: "/signup", name: "signup", component: SignUp },
  { path: "/login", name: "login", component: Login },
  { path: "/home", name: "home", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
