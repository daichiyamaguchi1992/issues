import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/issues",
  },
  {
    path: "/issues",
    name: "issues",
    component: () =>
      import("../views/Issues.vue")
  },
  {
    path: "/issues/:number",
    name: "issue",
    component: () =>
      import("../views/Issue.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
