<template lang="">
  <div class="wrapper">
    <section class="container sweeties">
      <h3 class="title">Sweeties</h3>

      <div class="sweeties__items">
        <SweetiesItem
          v-for="(cake, index) in cakeList.data"
          :key="index"
          :cake="cake"
        />
      </div>

      <n-pagination
        class="mt-10"
        v-model:page="page"
        :page-count="cakeList.totalPages"
      />

      <!-- Page number -->
    </section>
  </div>
</template>
<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import SweetiesItem from "../components/SweetiesItem.vue";
export default {
  components: { SweetiesItem },
  setup() {
    const store = useStore();
    const cakeList = computed(() => store.state.cakes.cakeList);
    const page = ref(1);
    console.log("page", page);
    store.dispatch("cakes/getAllCakeListAction", page);
    watch(
      () => page.value,
      (newVal, oldVal) => {
        console.log("newVal", newVal);
        store.dispatch("cakes/getAllCakeListAction", newVal);
      }
    );
    return {
      page,
      cakeList,
    };
  },
};
</script>
<style lang="css">
/* Sweeties */
.sweeties {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sweeties__items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px 20px;
}
</style>
