<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="appBarNavigationContainer">
        <v-btn to="/" text>
          products
        </v-btn>

        <v-btn to="/shoppingcart" text>
          shopping cart
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view class="router-view" />
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
<style>
.content-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding-left: 30px;
  padding-right: 30px;
}

.appBarNavigationContainer,
.router-view {
  width: 1200px;
  margin: 20px auto;
}

@media (max-width: 1264px) {
  .appBarNavigationContainer,
  .router-view {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
