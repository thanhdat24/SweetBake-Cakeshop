import { getAllUser, updateMe } from "../../api/userApi";

const state = () => {
  return {
    userList: [],
  };
};

const mutations = {
  setAllUserMutation(state, payload) {
    state.userList = payload;
  },
  setUpdateMeMutation(state, payload) {
    localStorage.setItem("userLogin", JSON.stringify(payload));
  },
};

const actions = {
  async getAlUserListAction({ commit }) {
    const response = await getAllUser();
    commit("setAllUserMutation", response.data.data);
  },
  async updateMeAction({ commit }, payload) {
    const response = await updateMe(payload);
    commit("setUpdateMeMutation", response.data.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
