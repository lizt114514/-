<script setup>
import HomeBanner from "./components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeProduct from "./components/HomeProduct.vue";
</script>

<template>
  <div class="container">
    <home-category />
    <home-banner />
  </div>
  <home-new />
  <home-hot />
  <home-product />
</template>

<style scoped lang="scss">
.container {
  position: relative;
}
</style>