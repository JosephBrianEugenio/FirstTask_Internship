import Vue from "vue";
import VueRouter from "vue-router";
import post from "../components/myTable.vue";
import post1 from "../components/myPoste.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: post,
  },
  {
    path: "/post/:id",
    name: "post1",
    component: post1,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
