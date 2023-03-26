<template lang="">
  <div class="wrapper">
    <section class="container category">
      <h3 class="title">Experience Flavours</h3>
      <ul class="category__items">
        <CategoryItem
          v-for="(category, index) in categoryList"
          :key="index"
          :category="category"
        />
      </ul>
    </section>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CategoryItem from "../components/CategoryItem.vue";
export default {
  components: {
    CategoryItem,
  },
  setup() {
    const store = useStore();
    const categoryList = computed(() => store.state.categories.categoryList);
    return {
      categoryList,
    };
  },
};
</script>
<style lang="css">
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category__items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 35px;
}
</style>
