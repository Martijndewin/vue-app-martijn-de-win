<template>
  <div class="shoppingCartItem mb-6">
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
      <v-card-text class="d-flex align-baseline">
        <p class="priceText">{{ price }} x</p>

        <v-text-field
          class="shrink"
          :value="itemQuantity"
          hide-details
          single-line
          type="number"
          @input="updateItemQuantity"
        />
      </v-card-text>
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
    },
    updateItemQuantity(newQuantity) {
      // remove item when set to lower than 1
      if (newQuantity < 1) {
        this.removeFromCart(this.id);
      } else {
        store.commit("updateItemQuantity", {
          id: this.id,
          quantity: newQuantity
        });
      }
    }
  },
  computed: {
    itemQuantity() {
      return this.quantity;
    }
  }
};
</script>
