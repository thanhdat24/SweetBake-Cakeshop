<template lang="">
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">Edit category</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item> Category</n-breadcrumb-item>
          <n-breadcrumb-item> Create</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <div class="card">
      <n-input
        v-model:value="dataEdit.name"
        class="mb-10"
        type="text"
        size="large"
        placeholder="Category Name"
        clearable
      />
      <n-input
        v-model:value="dataEdit.description"
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
      <button
        class="mr-20 btn btn--primary text-2xl p-3 w-96"
        :class="{ disabled: isDisabled }"
        @click="handleEdit(dataEdit)"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>
<script>
import { reactive, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const categoryId = route.params.categoryId;
    store.dispatch("categories/getDetailCategoryAction", categoryId);
    const detailCategory = computed(
      () => store.state.categories.detailCategory
    );
    console.log("detailCategory", detailCategory);
    const dataEdit = reactive({
      name: "",
      description: "",
    });
    watch(
      () => detailCategory.value,
      (newVal) => {
        if (newVal) {
          dataEdit.name = newVal.name;
          dataEdit.description = newVal.description;
        }
      }
    );
    const handleEdit = (dataEdit) => {
      console.log("dataEdit", dataEdit);
      dataEdit = { ...dataEdit, categoryId: categoryId };
      store.dispatch("categories/editCategoryAction", dataEdit);
    };
    const isDisabled = computed(() => {
      return !dataEdit.name || !dataEdit.description;
    });
    return { detailCategory, dataEdit, handleEdit, isDisabled };
  },
};
</script>
<style lang="css">
.card {
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
}
</style>
