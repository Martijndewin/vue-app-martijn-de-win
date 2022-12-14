import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  state: {
    products: [],
    shoppingCartItems: []
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    addToShoppingCart(state, product) {
      const productIndex = state.shoppingCartItems.findIndex(
        itemInShoppingCart => itemInShoppingCart.id === product.id
      );
      // if product is not in shopping cart, add to cart.
      if (productIndex === -1) {
        // add quantity value.
        product.quantity = 1;
        state.shoppingCartItems.push(product);
      } else {
        // if product is in shopping cart, add 1 to quantity.
        state.shoppingCartItems[productIndex].quantity++;
      }
    },
    removeItemFromCart(state, productId) {
      // find product in cart and remove from array
      state.shoppingCartItems.splice(
        state.shoppingCartItems.findIndex(
          cartItem => cartItem.id === productId
        ),
        1
      );
    },
    updateItemQuantity(state, { id, quantity }) {
      const productIndex = state.shoppingCartItems.findIndex(
        itemInShoppingCart => itemInShoppingCart.id === id
      );
      state.shoppingCartItems[productIndex].quantity = quantity;
    }
  },
  actions: {},
  modules: {}
});
