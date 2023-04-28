import { getCategory, postCategory } from "../../api/categoriesApi";
import router from "../../router";
const state = () => {
  return {
    categoryList: [],
    createCategorySuccess: null,
  };
};

const mutations = {
  setCategoryListMutation(state, payload) {
    state.categoryList = payload;
  },
  setPostCategoryMutation(state, response) {
    console.log("response", response);
    if (response.status === 201) {
      state.createCategorySuccess = response.data.data;
      router.push("/admin/categories");
    }
  },
  setResetCategoryMutation(state) {
    state.createCategorySuccess = null;
  },
};

const actions = {
  async getCategoryListAction({ commit }) {
    const response = await getCategory();
    commit("setCategoryListMutation", response.data.data);
  },

  async postCategoryAction({ commit }, data) {
    console.log("data", data);
    const response = await postCategory(data);
    console.log("response", response);
    commit("setPostCategoryMutation", response);
  },
  resetCategory({ commit }) {
    commit("setResetCategoryMutation");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
