<template>
  <div class="home">
    <h1>Products</h1>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store";

const baseUrl = "http://localhost:3000/products";
export default {
  name: "Home",
  components: {},
  async created() {
    try {
      const res = await axios.get(baseUrl);
      store.commit("updateProducts", res.data);
    } catch (er) {
      console.log(er);
    }
  }
};
</script>
