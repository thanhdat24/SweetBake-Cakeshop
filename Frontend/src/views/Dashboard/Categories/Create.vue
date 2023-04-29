<template lang="">
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">Create a new category</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item> Category</n-breadcrumb-item>
          <n-breadcrumb-item> Create</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <div class="card">
      <n-input
        v-model:value="dataCreate.name"
        class="mb-10"
        type="text"
        size="large"
        placeholder="Category Name"
        clearable
      />
      <n-input
        v-model:value="dataCreate.description"
        type="textarea"
        placeholder="Description"
        round
        size="large"
        clearable
        maxlength="30"
        show-count
      />
    </div>
    <div class="flex justify-center mt-10">
      <n-button
        class="mr-20 custom-button !py-8 w-1/5 !text-3xl"
        @click="handleCreate"
        :loading="loading"
        :disabled="isDisabled"
      >
        Create Category
      </n-button>
    </div>
  </div>
</template>
<script>
import { reactive, computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const loading = ref(false);
    const dataCreate = reactive({
      name: "",
      description: "",
    });

    const handleCreate = () => {
      loading.value = true;
      store.dispatch("categories/postCategoryAction", dataCreate);
    };
    const isDisabled = computed(() => {
      return !dataCreate.name || !dataCreate.description;
    });
    return { loading, dataCreate, handleCreate, isDisabled };
  },
};
</script>
<style lang="css">
/* .card {
  background-color: rgb(255, 255, 255);
  color: rgb(33, 43, 54);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-image: none;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
  z-index: 0;
  padding: 24px;
  width: 50%;
  margin: 0 auto;
} */
</style>
