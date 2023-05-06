<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">User List</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item>User</n-breadcrumb-item>
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
import { NTag } from "naive-ui";
import { h, defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();

    store.dispatch("users/getAlUserListAction");

    const userList = computed(() => store.state.users.userList);

    return {
      userList,
      columns: [
        {
          title: "Name",
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
                  src: row.photoURL,
                  style: {
                    width: "55px",
                    borderRadius: "50%",
                  },
                }),

                h("span", row.displayName),
              ]
            );
          },
        },
        {
          title: "Email",
          key: "email",
        },
        {
          title: "Phone",
          key: "phoneNumber",
        },
        {
          title: "Role",
          key: "role",
          render(row) {
            return h(
              NTag,
              {
                style: {
                  marginRight: "6px",
                },
                type: row.role === "Quản trị" ? "error" : "info",
                bordered: false,
              },
              {
                default: () => row.role,
              }
            );
          },
        },
      ],
      data: userList,
    };
  },
});
</script>
<style lang=""></style>
