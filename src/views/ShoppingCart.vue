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
    }
  }
};
</script>
