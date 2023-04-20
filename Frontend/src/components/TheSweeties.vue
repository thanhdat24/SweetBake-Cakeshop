<template lang="">
  <div class="wrapper">
    <section class="container sweeties">
      <h3 class="title">Sweeties</h3>

      <div class="sweeties__items">
        <SweetiesItem
          v-for="(cake, index) in cakeList"
          :key="index"
          :cake="cake"
        />
      </div>

      <!-- Page number -->
    </section>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import SweetiesItem from "../components/SweetiesItem.vue";
export default {
  components: { SweetiesItem },
  setup() {
    const store = useStore();
    const cakeList = computed(() => store.state.cakes.cakeList);
    console.log("cakeList", cakeList);
    return {
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
