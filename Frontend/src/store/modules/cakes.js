import {
  getAllCake,
  getCakeByCategory,
  getCakeDetail,
} from "../../api/cakesApi";

const state = () => {
  return {
    cakeByCategoryList: [],
    cakeList: [],
    cakeDetail: {},
  };
};

const mutations = {
  setCakeByCategoryMutation(state, payload) {
    state.cakeByCategoryList = payload;
  },
  setAllCakeMutation(state, payload) {
    state.cakeList = payload;
  },

  setCakeDetailMutation(state, payload) {
    state.cakeDetail = payload;
  },
};

const actions = {
  async getCakeByCategoryListAction({ commit }, payload) {
    const response = await getCakeByCategory(payload);
    commit("setCakeByCategoryMutation", response.data.data);
  },

  async getAllCakeListAction({ commit }) {
    const response = await getAllCake();
    commit("setAllCakeMutation", response.data.data);
  },

  async getCakeDetailAction({ commit }, payload) {
    const response = await getCakeDetail(payload);
    commit("setCakeDetailMutation", response.data.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
