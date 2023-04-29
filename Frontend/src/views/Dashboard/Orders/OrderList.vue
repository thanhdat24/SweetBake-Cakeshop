<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">Order List</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item>Order</n-breadcrumb-item>
          <n-breadcrumb-item>List</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
    </div>

    <div class="paper">
      <n-space vertical :size="12">
        <n-data-table :columns="columns" :data="data" />
      </n-space>
    </div>
  </div>
</template>
<script>
import { NTag, NSelect, useMessage } from "naive-ui";
import { h, defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { formatDate } from "../../../utils/formatDate";
import { formatPriceInVND } from "../../../utils/formatNumber";
export default defineComponent({
  setup() {
    const store = useStore();
    const message = useMessage();
    store.dispatch("orders/getOrderListAction");
    const orderList = computed(() => store.state.orders.orderList);
    console.log("orderList", orderList);
    const updateOrderSuccess = computed(
      () => store.state.orders.updateOrderSuccess
    );
    watch(
      () => updateOrderSuccess.value,
      (newVal, oldVal) => {
        if (newVal !== null) {
          store.dispatch("orders/getOrderListAction");
          message.success("Update order successfully");
        }
      }
    );
    return {
      orderList,
      columns: [
        {
          title: "Customer",
          key: "displayName",
          render(row) {
            return h(
              "div",
              {
                style: {
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                },
              },
              [
                h("img", {
                  src: row.userId.photoURL,
                  style: {
                    width: "55px",
                    borderRadius: "50%",
                  },
                }),

                h("span", row.userId.displayName),
              ]
            );
          },
        },
        {
          title: "Phone",
          key: "phoneNumber",
          render(row) {
            return row.address.phoneNumber;
          },
        },
        {
          title: "Order Date",
          key: "createdAt",
          render(row) {
            return formatDate(row.createdAt);
          },
        },
        {
          title: "Status",
          key: "status",
          render(row) {
            const type =
              row.status === "Shipping"
                ? "info"
                : row.status === "Delivered"
                ? "success"
                : "warning";
            return h(
              NTag,
              {
                style: {
                  marginRight: "6px",
                },
                type: type,
                bordered: false,
              },
              {
                default: () => row.status,
              }
            );
          },
        },
        {
          title: "Price",
          key: "total",
          render(row) {
            return formatPriceInVND(row.total);
          },
        },
        {
          title: "Action",
          key: "action",

          render(row) {
            let selectedValue = row.status;
            const filterOptions = computed(() => {
              if (selectedValue === "Shipping") {
                return [
                  {
                    label: "In Progress",
                    value: "In Progress",
                    disabled: true,
                  },
                  {
                    label: "Shipping",
                    value: "Shipping",
                  },
                  {
                    label: "Delivered",
                    value: "Delivered",
                  },
                ];
              } else if (selectedValue === "Delivered") {
                return [
                  {
                    label: "In Progress",
                    value: "In Progress",
                    disabled: true,
                  },
                  {
                    label: "Shipping",
                    value: "Shipping",
                    disabled: true,
                  },
                  {
                    label: "Delivered",
                    value: "Delivered",
                  },
                ];
              } else {
                return [
                  {
                    label: "In Progress",
                    value: "In Progress",
                  },
                  {
                    label: "Shipping",
                    value: "Shipping",
                  },
                  {
                    label: "Delivered",
                    value: "Delivered",
                  },
                ];
              }
            });
            return h(NSelect, {
              size: "small",
              options: filterOptions.value,
              style: {
                width: "150px",
                height: "32px",
              },
              value: selectedValue,
              "onUpdate:value": (value) => {
                // Xử lý giá trị được chọn
                selectedValue = value;
                store.dispatch("orders/updateOrderAction", {
                  orderId: row.id,
                  status: value,
                });
              },
            });
          },
        },
      ],
      data: orderList,
    };
  },
});
</script>
<style lang=""></style>
