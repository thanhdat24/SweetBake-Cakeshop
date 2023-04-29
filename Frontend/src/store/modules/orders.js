import {
  createOrder,
  getDetailOrder,
  getMeOrder,
  getOrder,
  updateOrder,
} from "../../api/orderApi";

const state = () => {
  return {
    createOrderSuccess: {},
    orderList: [],
    orderUser: {},
    orderDetail: {},
    isLoading: false,
    updateOrderSuccess: null,
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
  setUpdateOrderMutation(state, payload) {
    if (payload.status === 200) {
      state.updateOrderSuccess = payload.data.data;
    }
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

  async updateOrderAction({ commit }, { orderId, status }) {
    const response = await updateOrder(orderId, { status: status });
    commit("setUpdateOrderMutation", response);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
