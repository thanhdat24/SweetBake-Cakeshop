import {
  deleteCategory,
  editCategory,
  getCategory,
  getDetailCategory,
  postCategory,
} from "../../api/categoriesApi";
import router from "../../router";
const state = () => {
  return {
    categoryList: [],
    createCategorySuccess: null,
    deleteCategorySuccess: null,
    detailCategory: null,
    editCategory: null,
  };
};

const mutations = {
  setCategoryListMutation(state, payload) {
    state.categoryList = payload;
  },
  setPostCategoryMutation(state, response) {
    if (response.status === 201) {
      state.createCategorySuccess = response.data.data;
      router.push("/admin/categories");
    }
  },
  setResetCategoryMutation(state) {
    state.createCategorySuccess = null;
    state.deleteCategorySuccess = null;
    state.editCategory = null;
  },
  setDeleteCategoryMutation(state, response) {
    if (response.status === 201) {
      console.log("response", response.data.data);
      state.deleteCategorySuccess = response.data.data;
    }
  },
  setEditCategoryMutation(state, response) {
    if (response.status === 200) {
      console.log("response", response.data.data);
      state.editCategory = response.data.data;
      router.push("/admin/categories");
    }
  },

  setDetailCategoryMutation(state, response) {
    if (response.status === 200) {
      console.log("response", response.data.data);
      state.detailCategory = response.data.data;
    }
  },
};

const actions = {
  async getCategoryListAction({ commit }) {
    const response = await getCategory();
    commit("setCategoryListMutation", response.data.data);
  },

  async postCategoryAction({ commit }, data) {
    const response = await postCategory(data);
    commit("setPostCategoryMutation", response);
  },

  async deleteCategoryAction({ commit }, id) {
    const response = await deleteCategory(id);
    commit("setDeleteCategoryMutation", response);
  },
  async editCategoryAction({ commit }, data) {
    const response = await editCategory(data.id, data);
    commit("setEditCategoryMutation", response);
  },

  async getDetailCategoryAction({ commit }, id) {
    const response = await getDetailCategory(id);
    commit("setDetailCategoryMutation", response);
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
