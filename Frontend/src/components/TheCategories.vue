<template lang="">
  <div class="wrapper">
    <section class="container category">
      <h3 class="title">Experience Flavours</h3>
      <ul class="category__items">
        <CategoryItem />
      </ul>
    </section>
  </div>
</template>
<script>
import CategoryItem from "../components/CategoryItem.vue";
export default {
  components: {
    CategoryItem,
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
