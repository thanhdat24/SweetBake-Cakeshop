<template lang="">
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">Create a new cake</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item> Cake</n-breadcrumb-item>
          <n-breadcrumb-item> Create</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="card col-span-2 !w-11/12">
        <n-input
          v-model:value="data.name"
          class="mb-10"
          type="text"
          size="large"
          placeholder="Cake Name"
          clearable
        />
        <n-input
          v-model:value="data.description"
          class="mb-10 h-52"
          type="textarea"
          placeholder="Description"
          round
          size="large"
          clearable
          maxlength="500"
          show-count
        />
        <n-upload
          list-type="image-card"
          @preview="handlePreview"
          @change="handleChange"
        />
      </div>
      <div class="card !w-11/12">
        <n-input-number
          class="mb-10"
          v-model:value="data.stock"
          size="large"
          placeholder="Stock"
        />
        <n-select
          class="mb-10"
          v-model:value="data.categoryId"
          :options="categoryListOptions"
          placeholder="Category"
          size="large"
        />

        <n-input-number
          class="mb-10"
          v-model:value="data.price"
          placeholder="Regular Price"
          :show-button="false"
          size="large"
        >
          <template #prefix> $ </template>
        </n-input-number>

        <n-input-number
          v-model:value="data.priceSale"
          placeholder="Price Sale"
          :show-button="false"
          size="large"
        >
          <template #prefix> $ </template>
        </n-input-number>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <n-button
        class="mr-20 custom-button !py-8 w-1/5 !text-3xl"
        @click="handleCreate"
        :loading="loading"
        :disabled="isDisabled"
      >
        Create Cake
      </n-button>
    </div>
  </div>
</template>
<script>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const loading = ref(false);
    const data = reactive({
      name: null,
      description: null,
      categoryId: null,
      stock: null,
      price: null,
      priceSale: null,
      cakeImages: null,
    });
    const store = useStore();
    store.dispatch("categories/getCategoryListAction");
    const categoryList = computed(() => store.state.categories.categoryList);

    const categoryListOptions = computed(() => {
      return categoryList.value?.map(({ id, name }) => ({
        label: name,
        value: id,
      }));
    });
    const handlePreview = (file) => {
      const { url } = file;
      previewImageUrlRef.value = url;
      showModalRef.value = true;
    };
    const handleChange = (file) => {
      data.cakeImages = file.file.file;
    };

    const handleCreate = () => {
      loading.value = true;
      store.dispatch("cakes/postCakeAction", data);
    };
    const isDisabled = computed(() => {
      return (
        !data.name ||
        !data.description ||
        !data.categoryId ||
        !data.stock ||
        !data.price ||
        !data.priceSale ||
        !data.cakeImages
      );
    });
    return {
      isDisabled,
      data,
      categoryListOptions,
      handlePreview,
      handleChange,
      handleCreate,
      loading,
    };
  },
};
</script>
<style lang=""></style>
