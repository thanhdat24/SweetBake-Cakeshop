import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CakeDetail from "../views/CakeDetail.vue";
import CategoryDetail from "../views/CakeCategoryDetail.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Admin from "@/layouts/Admin.vue";
import Tables from "@/views/admin/Tables.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
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
    {
      path: "/cake/:cakeName",
      name: "cake-detail",
      component: CakeDetail,
    },
    {
      path: "/admin",
      redirect: "/admin/dashboard",
      component: Admin,
      children: [
        {
          path: "/admin/dashboard",
          component: Dashboard,
        },
        // {
        //   path: "/admin/settings",
        //   component: Settings,
        // },
        {
          path: "/admin/tables",
          component: Tables,
        },
        // {
        //   path: "/admin/maps",
        //   component: Maps,
        // },
      ],
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

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem("accessToken");
  const userLogin = localStorage.getItem("userLogin");
  if (to.name === "login" && accessToken && userLogin) {
    // nếu người dùng đã đăng nhập và cố gắng truy cập trang đăng nhập
    // thì chuyển hướng người dùng đến trang home
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
