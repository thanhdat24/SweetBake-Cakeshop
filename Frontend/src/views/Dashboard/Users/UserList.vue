<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">User List</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item> User</n-breadcrumb-item>
          <n-breadcrumb-item> List</n-breadcrumb-item>
        </n-breadcrumb>
      </div>
      <router-link
        to="/admin/categories/new"
        class="mr-20 btn btn--primary text-2xl p-3"
      >
        Add User
      </router-link>
    </div>

    <div class="paper">
      <n-space vertical :size="12">
        <n-data-table :columns="columns" :data="data" />
      </n-space>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
