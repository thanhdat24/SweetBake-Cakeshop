const state = () => {
  return {
    checkout: {
      activeStep: 0,
      cart: [],
      subtotal: 0,
      total: 0,
    },
  };
};

const mutations = {
  setCartMutation(state, payload) {
    const product = payload;
    const isEmptyCart = state.checkout.cart.length === 0;
    const productWithQuantity = { ...product, quantity: 1 };
    if (isEmptyCart) {
      state.checkout.cart = [...state.checkout.cart, productWithQuantity];
    } else {
      const indexCart = state.checkout.cart?.findIndex(
        (item) => item.id === product.id
      );
      if (indexCart !== -1) {
        state.checkout.cart[indexCart].quantity += 1;
      } else {
        state.checkout.cart = [...state.checkout.cart, productWithQuantity];
      }
      console.log(state.checkout.cart);
    }
    localStorage.setItem("checkout", JSON.stringify(state.checkout));
  },
  setCartListMutation(state, payload) {
    state.checkout = payload;
  },
  setQuantityCartMutation(state, payload) {
    const { id, quantity } = payload;
    const indexCart = state.checkout.cart?.findIndex((item) => item.id === id);
    if (indexCart !== -1) {
      state.checkout.cart[indexCart].quantity = quantity;
    }

    localStorage.setItem("checkout", JSON.stringify(state.checkout));
  },
  setDeleteCartMutation(state, payload) {
    const cart = payload;
    const updateCart = state.checkout.cart.filter(
      (item, index) => item.id !== cart.id
    );

    state.checkout.cart = updateCart;
    localStorage.setItem("checkout", JSON.stringify(state.checkout));
  },
};

const actions = {
  addToCartAction({ commit }, payload) {
    commit("setCartMutation", payload);
  },
  getCart({ commit }) {
    let checkout = {
      activeStep: 0,
      cart: [],
      subtotal: 0,
      total: 0,
    };
    if (JSON.parse(localStorage.getItem("checkout"))?.cart.length > 0) {
      checkout = JSON.parse(localStorage.getItem("checkout"));
      console.log(checkout);
      if (checkout?.cart.length > 0) {
        const subtotal = checkout.cart.reduce((total, cartItem) => {
          return total + cartItem.price * cartItem.quantity;
        }, 0);

        checkout.subtotal = subtotal;

        checkout.total = subtotal;

        localStorage.setItem("cart", JSON.stringify(state.checkout));
      }
    } else {
      localStorage.setItem("checkout", JSON.stringify(checkout));
    }

    commit("setCartListMutation", checkout);
  },
  async updateQuantityCart({ commit }, payload) {
    commit("setQuantityCartMutation", payload);
  },

  async deleteCart({ commit }, payload) {
    commit("setDeleteCartMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
