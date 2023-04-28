import { createStore } from "vuex";
import categories from "./modules/categories";
import cakes from "./modules/cakes";
import carts from "./modules/carts";
import orders from "./modules/orders";
import users from "./modules/users";
import settings from "./modules/settings";
import auths from "./modules/auths";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    categories,
    cakes,
    settings,
    auths,
    carts,
    orders,
    users,
  },
});
