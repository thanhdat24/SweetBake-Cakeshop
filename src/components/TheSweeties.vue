<template lang="">
  <div class="wrapper">
    <section class="container sweeties">
      <h3 class="title">Sweeties</h3>

      <div class="sweeties__items">
        <SweetiesItem />
      </div>

      <!-- Page number -->
    </section>
  </div>
</template>
<script>
import SweetiesItem from "../components/SweetiesItem.vue";
export default {
  components: { SweetiesItem },
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
