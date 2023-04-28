<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">Cake List</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item> Cake</n-breadcrumb-item>
          <n-breadcrumb-item> List</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
      <button class="mr-20 btn btn--primary text-2xl p-3">Add Cake</button>
    </div>
    <div class="paper">
      <n-space vertical :size="12">
        <n-data-table
          :columns="columns"
          :data="data"
          :pagination="pagination"
          :bordered="false"
        />
      </n-space>
    </div>
  </div>
</template>

<script>
import { h, computed } from "vue";
import { NIcon, NButton, useMessage } from "naive-ui";
import { useStore } from "vuex";
import { TrashOutline, BuildOutline } from "@vicons/ionicons5";
import { formatPriceInVND } from "../../../utils/formatNumber";
const createColumns = () => {
  return [
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Category",
      key: "categoryId.name",
    },
    {
      title: "Price",
      key: "price",
      render(row) {
        return formatPriceInVND(row.price);
      },
    },
    {
      title: "Price Sale",
      key: "priceSale",
      render(row) {
        return formatPriceInVND(row.priceSale);
      },
    },
    {
      title: "Image",
      key: "cakeImages[0].url",
      render(row) {
        return h("img", {
          src: row.cakeImages[0].url,
          style: {
            width: "95px",
          },
        });
      },
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
                  onClick: () => deleteCategory(row),
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
                  onClick: () => editCategory(row),
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
  ];
};

export default {
  setup() {
    const message = useMessage();
    const store = useStore();
    store.dispatch("cakes/getAllCakeListAction");

    const cakeList = computed(() => store.state.cakes.cakeList);
    console.log("cakeList", cakeList);
    return {
      cakeList,
      data: cakeList,
      columns: createColumns({
        sendMail(rowData) {
          message.info("send mail to " + rowData.name);
        },
      }),
      pagination: {
        pageSize: 10,
      },
    };
  },
};
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
}
</style>
