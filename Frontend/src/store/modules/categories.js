import { getCategory } from "../../api/categoriesApi";

const state = () => {
  return {
    categoryList: [],
  };
};

const mutations = {
  setCategoryListMutation(state, payload) {
    state.categoryList = payload;
  },
};

const actions = {
  async getCategoryListAction(context) {
    const response = await getCategory();
    context.commit("setCategoryListMutation", response.data.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
