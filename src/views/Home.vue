<template>
  <div class="home">
    <h1 class="pl-3">Products</h1>
    <v-text-field
      placeholder="Search for a product"
      v-model="productSearchString"
      @input="searchProducts(productSearchString)"
      class="product-search mx-4"
    />
    <ProductBrandCardVue
      v-for="product in products"
      :key="product.slug"
      :name="product.name"
      :slug="product.slug"
      :products="product.products"
    />
    <v-pagination
      v-model="pagination.page"
      :length="Math.ceil(pagination.total / pagination.perPage)"
      @input="handlePageChange"
    ></v-pagination>
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
  data() {
    return {
      productSearchString: "",
      pagination: {
        page: 1,
        total: 0,
        perPage: 5
      }
    };
  },
  computed: {
    products() {
      return store.state.products;
    }
  },
  async created() {
    try {
      const res = await axios.get(baseUrl, {
        params: {
          _limit: this.pagination.perPage,
          _page: this.pagination.page
        }
      });
      // total count products:
      this.pagination.total = res.headers["x-total-count"];

      store.commit("updateProducts", res.data);
    } catch (er) {
      console.log(er);
    }
  },
  methods: {
    async handlePageChange() {
      const res = await axios.get(baseUrl, {
        params: {
          _limit: this.pagination.perPage,
          _page: this.pagination.page
        }
      });
      this.$store.commit("updateProducts", res.data);
    },
    async searchProducts(productSearchString) {
      try {
        const res = await axios.get(
          `${baseUrl}?name_like=${productSearchString}`,
          {
            params: {
              _limit: this.pagination.perPage,
              _page: this.pagination.page
            }
          }
        );
        // total count products:
        this.pagination.total = res.headers["x-total-count"];

        store.commit("updateProducts", res.data);
      } catch (er) {
        console.log(er);
      }
    }
  }
};
</script>
