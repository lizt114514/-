<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

import { useCategoryStore } from "../../stores/categoryStore";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();

onMounted(() => categoryStore.getCategory());
</script>

<template>
  <div>
    <LayoutFixed />
    <LayoutNav />
    <div class="mid">
      <LayoutHeader />
      <RouterView />
    </div>
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
    .mid {
        margin:0 auto;
        width: 1240px;
    }
</style>../../stores/categoryStore