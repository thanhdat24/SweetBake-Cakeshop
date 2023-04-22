import { createOrder } from "../../api/orderApi";

const state = () => {
  return {
    createOrderSuccess: {},
  };
};

const mutations = {
  setCreateOrderMutation(state, result) {
    if (result.status === 201) {
      state.createOrderSuccess = result.data.data;
      console.log("result", result.data.data);
      localStorage.removeItem("checkout");
    }
  },
};

const actions = {
  async createOrderAction({ commit }, { data }) {
    console.log("data", data);
    const result = await createOrder(data);
    commit("setCreateOrderMutation", result);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
