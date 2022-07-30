import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
        product.quantity++;
        state.shoppingCartItems[productIndex] = product;
      }
    }
  },
  actions: {},
  modules: {}
});
