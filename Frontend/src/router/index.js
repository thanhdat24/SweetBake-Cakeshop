import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CakeDetail from "../views/CakeDetail.vue";
import CategoryDetail from "../views/CakeCategoryDetail.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/category/:categoryName",
      name: "category-detail",
      component: CategoryDetail,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
