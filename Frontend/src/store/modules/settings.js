const state = () => {
  return {
    showHeader: true,
    showFooter: true,
  };
};

const mutations = {
  setShowHeader(state, value) {
    state.showHeader = value;
  },
  setShowFooter(state, value) {
    state.showFooter = value;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
