<template>
  <div class="home">
    <h1>Products</h1>
    <ProductBrandCardVue
      v-for="product in products"
      :key="product.slug"
      :name="product.name"
      :slug="product.slug"
      :products="product.products"
    />
  </div>
</template>

<script>
import axios from "axios";
import store from "../store";

import ProductBrandCardVue from "@/components/ProductBrandCard.vue";

const baseUrl = "http://localhost:3000/products";
export default {
  name: "Home",
  components: {
    ProductBrandCardVue
  },
  computed: {
    products() {
      return store.state.products;
    }
  },
  async created() {
    try {
      // get all products
      const res = await axios.get(baseUrl);
      store.commit("updateProducts", res.data);
    } catch (er) {
      console.log(er);
    }
  }
};
</script>
