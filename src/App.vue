<template>
  <v-app>
    <v-app-bar app color="primary" dark class="d-flex justify-center">
      <v-btn to="/" text>
        products
      </v-btn>

      <v-btn to="/shoppingcart" text>
        shopping cart
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
