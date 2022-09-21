import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/signup", name: "signup", component: SignUp },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
