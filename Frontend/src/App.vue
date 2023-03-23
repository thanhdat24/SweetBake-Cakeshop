<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader></TheHeader>
  <RouterView />
  <TheFooter></TheFooter>
</template>

<style scoped></style>
