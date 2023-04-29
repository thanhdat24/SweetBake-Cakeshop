<template lang="">
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">Edit cake</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item> Cake</n-breadcrumb-item>
          <n-breadcrumb-item> {{ cakeDetail?.name }}</n-breadcrumb-item>
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
          :default-file-list="data.cakeImages"
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
        @click="handleEdit(data)"
        :loading="loading"
        :disabled="isDisabled"
      >
        Save Changes
      </n-button>
    </div>
  </div>
</template>
<script>
import { reactive, watch, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const loading = ref(false);
    const data = reactive({
      name: "",
      id: "",
      description: "",
      stock: 0,
      categoryId: "",
      price: 0,
      priceSale: 0,
      cakeImages: [],
    });

    const cakeName = route.params.cakeName;
    store.dispatch("cakes/getCakeDetailAction", cakeName);
    store.dispatch("categories/getCategoryListAction");
    const categoryList = computed(() => store.state.categories.categoryList);

    const categoryListOptions = computed(() => {
      return categoryList.value?.map(({ id, name }) => ({
        label: name,
        value: id,
      }));
    });
    const cakeDetail = computed(() => store.state.cakes.cakeDetail);
    console.log("cakeDetail", cakeDetail);
    watch(
      () => cakeDetail.value,
      (newVal) => {
        if (newVal) {
          data.id = newVal.id;
          data.name = newVal.name;
          data.description = newVal.description;
          data.stock = newVal.stock;
          data.categoryId = newVal.categoryId.id;
          data.price = newVal.price;
          data.priceSale = newVal.priceSale;
          data.cakeImages[0] = newVal.cakeImages[0];
        }
      }
    );
    const handleEdit = (data) => {
      loading.value = true;
      console.log("data", data);
      store.dispatch("cakes/editCakeAction", data);
    };
    const handlePreview = (file) => {
      const { url } = file;
      previewImageUrlRef.value = url;
      showModalRef.value = true;
    };
    const handleChange = (file) => {
      data.cakeImages = file.file.file;
    };
    return {
      categoryListOptions,
      loading,
      handleEdit,
      handlePreview,
      handleChange,
      cakeDetail,
      data,
    };
  },
};
</script>
<style lang=""></style>
