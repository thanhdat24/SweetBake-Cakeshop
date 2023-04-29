import {
  deleteCake,
  editCake,
  getAllCake,
  getCakeByCategory,
  getCakeDetail,
  postCake,
} from "../../api/cakesApi";
import router from "../../router";

const state = () => {
  return {
    cakeByCategoryList: [],
    cakeList: [],
    cakeDetail: {},
    createCakeSuccess: null,
    editCake: null,
    deleteCakeSuccess: null,
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

  setPostCakeMutation(state, response) {
    if (response.status === 201) {
      state.createCakeSuccess = response.data.data;
      router.push("/admin/cakes");
    }
  },

  setEditCakeMutation(state, response) {
    if (response.status === 200) {
      console.log("response", response.data.data);
      state.editCake = response.data.data;
      router.push("/admin/cakes");
    }
  },

  setDeleteCakeMutation(state, response) {
    if (response.status === 201) {
      console.log("response", response.data.data);
      state.deleteCakeSuccess = response.data.data;
    }
  },
  setResetCakeMutation(state) {
    state.createCakeSuccess = null;
    state.editCake = null;
    state.deleteCakeSuccess = null;
  },
};

const actions = {
  async getCakeByCategoryListAction({ commit }, payload) {
    const response = await getCakeByCategory(payload);
    commit("setCakeByCategoryMutation", response.data.data);
  },

  async getAllCakeListAction({ commit }, payload) {
    const response = await getAllCake(payload);
    commit("setAllCakeMutation", response.data.data);
  },

  async getCakeDetailAction({ commit }, payload) {
    const response = await getCakeDetail(payload);
    commit("setCakeDetailMutation", response.data.data);
  },

  async postCakeAction({ commit }, payload) {
    const response = await postCake(payload);
    console.log("response", response);
    commit("setPostCakeMutation", response);
  },
  async editCakeAction({ commit }, data) {
    const response = await editCake(data.id, data);
    commit("setEditCakeMutation", response);
  },

  async deleteCakeAction({ commit }, id) {
    const response = await deleteCake(id);
    commit("setDeleteCakeMutation", response);
  },
  resetCake({ commit }) {
    commit("setResetCakeMutation");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
