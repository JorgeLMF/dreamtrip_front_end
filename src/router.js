import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/signup", name: "signup", component: SignUp },
  { path: "/login", name: "login", component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
