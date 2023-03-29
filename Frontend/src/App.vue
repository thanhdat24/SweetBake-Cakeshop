<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const showHeader = computed(() => store.state.settings.showHeader);
const showFooter = computed(() => store.state.settings.showFooter);

const isLogin = computed(() => route.path === "/login");
const isRegister = computed(() => route.path === "/register");
const isAdmin = computed(() => route.path.startsWith("/admin"));
</script>

<template>
  <div v-if="!isLogin && !isRegister && !isAdmin">
    <div v-if="showHeader">
      <TheHeader></TheHeader>
    </div>
    <RouterView />
    <div v-if="showFooter">
      <TheFooter></TheFooter>
    </div>
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<style scoped></style>
