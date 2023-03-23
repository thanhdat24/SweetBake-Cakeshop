<template lang="">
  <!-- banner -->
  <TheBanner></TheBanner>
  <!-- wrapper category -->
  <TheCategories></TheCategories>
  <!-- wrapper best seller -->
  <TheBestSeller></TheBestSeller>
  <!-- wrapper sweeties -->
  <TheSweeties></TheSweeties>
</template>
<script>
import TheCategories from "../components/TheCategories.vue";
import TheBestSeller from "../components/TheBestSeller.vue";
import TheSweeties from "../components/TheSweeties.vue";
import TheBanner from "../components/TheBanner.vue";
export default {
  components: {
    TheCategories,
    TheBestSeller,
    TheSweeties,
    TheBanner,
  },
};
</script>
<style lang=""></style>
