import { createStore } from "vuex";
import categories from "./modules/categories";
import cakes from "./modules/cakes";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    categories,
    cakes,
  },
});
