import { postLogin, postRegister } from "../../api/auth";

const state = () => {
  return {
    userLogin: null,
    loginError: null,
    registerSuccess: null,
    registerError: null,
  };
};

const mutations = {
  setLoginMutation(state, payload) {
    state.userLogin = payload;
    localStorage.setItem("userLogin", JSON.stringify(payload.user));
    localStorage.setItem("accessToken", JSON.stringify(payload.token));
  },
  setLoginErrorMutation(state, payload) {
    state.loginError = payload;
  },
  setRegisterMutation(state, payload) {
    state.registerSuccess = payload;
  },
  setRegisterErrorMutation(state, payload) {
    state.registerError = payload;
  },
  setLoadUserMutation(state, payload) {
    state.userLogin = payload;
  },
  setLogoutUserMutation(state, payload) {
    state.userLogin = payload;
  },
};

const actions = {
  async postLoginAction({ commit }, { data, router }) {
    try {
      const response = await postLogin(data);
      console.log("response.data", response.data);
      if (response.data.user.role === "Quản trị") {
        router.push("/admin/categories");
      } else {
        router.push("/");
      }
      commit("setLoginMutation", response.data);
    } catch (error) {
      commit("setLoginErrorMutation", error.message);
    }
  },

  async postRegisterAction({ commit }, { data, router }) {
    try {
      const response = await postRegister(data);
      router.push("/login");
      console.log("response", response);
      commit("setRegisterMutation", response.data);
    } catch (error) {
      console.log("error", error.message);

      commit("setRegisterErrorMutation", error.message);
    }
  },
  loadUser({ commit }) {
    let userLogin = null;
    if (localStorage.getItem("userLogin")) {
      userLogin = JSON.parse(localStorage.getItem("userLogin"));
    }
    commit("setLoadUserMutation", userLogin);
  },
  logoutUser({ commit }) {
    let userLogin = null;
    if (
      localStorage.removeItem("userLogin") ||
      localStorage.removeItem("accessToken")
    ) {
      userLogin = null;
    }
    commit("setLogoutUserMutation", userLogin);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
