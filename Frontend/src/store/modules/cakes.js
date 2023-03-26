import { getCakeByCategory } from "../../api/cakesApi";

const state = () => {
  return {
    cakeByCategoryList: [],
  };
};

const mutations = {
  setCakeByCategoryMutation(state, payload) {
    state.cakeByCategoryList = payload;
  },
};

const actions = {
  async getCakeByCategoryListAction({ commit }, payload) {
    const response = await getCakeByCategory(payload);
    console.log("response", response.data.data);
    commit("setCakeByCategoryMutation", response.data.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
