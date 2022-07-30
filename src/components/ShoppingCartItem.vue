<template>
  <div>
    <v-card>
      <v-card-title>{{ id }}</v-card-title>
      <v-card-text> {{ price }} x {{ quantity }} </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["id", "price", "quantity", "value"],
  methods: {}
};
</script>

<style></style>
