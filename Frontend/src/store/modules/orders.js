import {
  createOrder,
  getDetailOrder,
  getMeOrder,
  getOrder,
} from "../../api/orderApi";

const state = () => {
  return {
    createOrderSuccess: {},
    orderList: {},
    orderUser: {},
    orderDetail: {},
    isLoading: false,
  };
};

const mutations = {
  setCreateOrderMutation(state, response) {
    if (response.status === 201) {
      state.createOrderSuccess = response.data.data;
      localStorage.removeItem("checkout");
    }
  },
  setOrderListMutation(state, payload) {
    state.orderList = payload;
  },
  setMeOrderListMutation(state, payload) {
    state.orderUser = payload;
    state.isLoading = true;
  },
  setDetailOrderMutation(state, payload) {
    state.orderDetail = payload;
    state.isLoading = true;
  },
};

const actions = {
  async createOrderAction({ commit }, { data }) {
    console.log("data", data);
    const response = await createOrder(data);
    commit("setCreateOrderMutation", response);
  },

  async getOrderListAction(context) {
    const response = await getOrder();
    context.commit("setOrderListMutation", response.data.data);
  },

  async getMeOrderAction(context) {
    const response = await getMeOrder();
    context.commit("setMeOrderListMutation", response.data.data);
  },

  async getDetailOrderAction({ commit }, payload) {
    const response = await getDetailOrder(payload);
    commit("setDetailOrderMutation", response.data.data);
    console.log("response", response.data.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
