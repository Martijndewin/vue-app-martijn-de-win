<template>
  <div>
    <v-card>
      <v-app-bar flat>
        <v-toolbar-title>
          {{ id }}
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn @click="removeFromCart(id)" icon>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-app-bar>
      <v-card-text> {{ price }} x {{ quantity }} </v-card-text>
    </v-card>
  </div>
</template>

<script>
import store from "../store";
export default {
  props: ["id", "price", "quantity", "value"],
  methods: {
    removeFromCart(id) {
      store.commit("removeItemFromCart", id);
    }
  }
};
</script>

<style></style>
