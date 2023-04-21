import { createOrder } from "../../api/orderApi";

const state = () => {
  return {
    order: {},
  };
};

const mutations = {};

const actions = {
  async createOrderAction({ commit }, { data }) {
    console.log("data", data);
    const result = await createOrder(data);
    console.log(result);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
