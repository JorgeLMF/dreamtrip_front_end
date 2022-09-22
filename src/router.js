import { createWebHashHistory, createRouter } from "vue-router";
import Initial from "./components/Initial.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";

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
