<template>
  <div>
    <v-card>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text>
        <v-chip
          v-for="product in products"
          @click="addToCard(product)"
          :key="product.id"
          >€{{ product.value }}</v-chip
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["name", "slug", "products"],
  methods: {
    addToCard(product) {
      console.log(product);
    }
  }
};
</script>

<style></style>
