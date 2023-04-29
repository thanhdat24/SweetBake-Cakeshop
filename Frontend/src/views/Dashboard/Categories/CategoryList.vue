<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">Category List</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item> Category</n-breadcrumb-item>
          <n-breadcrumb-item> List</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
      <router-link
        to="/admin/categories/new"
        class="mr-20 btn btn--primary text-2xl p-3"
      >
        Add Category
      </router-link>
    </div>
    <div class="paper">
      <n-space vertical :size="12">
        <n-data-table
          :columns="columns"
          :data="data"
          :pagination="pagination"
        />
      </n-space>
    </div>
  </div>
</template>

<script>
import { h, defineComponent, computed, watchEffect, watch } from "vue";
import { NIcon, NButton, useMessage } from "naive-ui";
import { useStore } from "vuex";
import { TrashOutline, BuildOutline } from "@vicons/ionicons5";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const message = useMessage();
    const router = useRouter();
    const store = useStore();
    const createCategorySuccess = computed(
      () => store.state.categories.createCategorySuccess
    );
    const editCategory = computed(() => store.state.categories.editCategory);
    if (createCategorySuccess.value !== null) {
      message.success("Create category successfully");
    }
    if (editCategory.value !== null) {
      message.success("Edit category successfully");
    }
    store.dispatch("categories/getCategoryListAction");
    store.dispatch("categories/resetCategory");
    const categoryList = computed(() => store.state.categories.categoryList);
    const deleteCategorySuccess = computed(
      () => store.state.categories.deleteCategorySuccess
    );
    console.log("deleteCategorySuccess", deleteCategorySuccess);

    watch(
      () => deleteCategorySuccess.value,
      (newVal, oldVal) => {
        if (newVal !== null) {
          store.dispatch("categories/getCategoryListAction");
          store.dispatch("categories/resetCategory");
          message.success("Delete category successfully");
        }
      }
    );
    const actionDelete = (row) => {
      store.dispatch("categories/deleteCategoryAction", row.id);
    };

    const actionEdit = (row) => {
      router.push("/admin/categories/" + row.id + "/edit");
    };
    return {
      createCategorySuccess,
      deleteCategorySuccess,
      categoryList,
      columns: [
        { title: "Id", key: "id" },
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Description",
          key: "description",
        },
        {
          title: "Action",
          key: "actions",
          render(row) {
            return h("div", [
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: "10px",
                  },
                },
                [
                  h(
                    NButton,
                    {
                      size: "small",
                      onClick: () => actionDelete(row),
                      type: "error",
                      dashed: true,
                    },
                    {
                      icon: () =>
                        h(NIcon, null, {
                          default: () => h(TrashOutline),
                        }),
                      default: () => "Delete",
                    }
                  ),
                  h(
                    NButton,
                    {
                      size: "small",
                      onClick: () => actionEdit(row),
                      type: "info",
                      dashed: true,
                    },
                    {
                      icon: () =>
                        h(NIcon, null, {
                          default: () => h(BuildOutline),
                        }),
                      default: () => "Edit",
                    }
                  ),
                ]
              ),
            ]);
          },
        },
      ],
      pagination: {
        pageSize: 9,
      },
      data: categoryList,
    };
  },
});
</script>

<style>
.paper {
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
  padding-bottom: 15px;
}
</style>
