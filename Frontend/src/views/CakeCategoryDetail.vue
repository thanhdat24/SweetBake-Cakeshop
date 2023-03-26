<template lang="">
  <section class="main-details-category">
    <div class="container categories">
      <h3 class="title mt-5 text-center">Cakes Chocolate</h3>
      <div class="categories__items">
        <CakeCategoryDetailItem
          v-for="(cake, index) in cakeByCategoryList"
          :key="index"
          :cake="cake"
        />
      </div>
    </div>
  </section>
</template>
<script>
import CakeCategoryDetailItem from "../components/CakeCategoryDetailItem.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  components: { CakeCategoryDetailItem },

  setup() {
    const route = useRoute();
    const store = useStore();
    const categoryName = route.params.categoryName;
    console.log("categoryName", categoryName);

    store.dispatch("cakes/getCakeByCategoryListAction", categoryName);
    const cakeByCategoryList = computed(
      () => store.state.cakes.cakeByCategoryList
    );
    console.log("cakeByCategoryList", cakeByCategoryList);
    return { cakeByCategoryList };
  },
};
</script>
<style lang="scss">
.categories {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.categories__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px 45px;
}
</style>
