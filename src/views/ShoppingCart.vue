<template>
  <div class="shoppingCart">
    <h1>This is the shopping cart</h1>
    <ShoppingCartItem
      v-for="shoppingCartItem in shoppingCartItems"
      :key="shoppingCartItem.id"
      :id="shoppingCartItem.id"
      :price="shoppingCartItem.price"
      :value="shoppingCartItem.value"
      :quantity="shoppingCartItem.quantity"
    />
    <div class="pa-6 float-right">
      <p v-if="shoppingCartItems.length">total: €{{ shoppingCartTotal }}</p>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import store from "../store";

import ShoppingCartItem from "@/components/ShoppingCartItem.vue";

export default {
  name: "Home",
  components: {
    ShoppingCartItem
  },
  computed: {
    shoppingCartItems() {
      return store.state.shoppingCartItems;
    },
    shoppingCartTotal() {
      let subtotal = 0;
      store.state.shoppingCartItems.forEach(item => {
        subtotal += item.price * item.quantity;
      });
      // round to 2 decimals
      return subtotal.toFixed(2);
    }
  }
};
</script>
