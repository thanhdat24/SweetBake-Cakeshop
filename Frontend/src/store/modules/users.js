import { getAllUser } from "../../api/userApi";

const state = () => {
  return {
    userList: [],
  };
};

const mutations = {
  setAllUserMutation(state, payload) {
    state.userList = payload;
  },
};

const actions = {
  async getAlUserListAction({ commit }) {
    const response = await getAllUser();
    commit("setAllUserMutation", response.data.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
