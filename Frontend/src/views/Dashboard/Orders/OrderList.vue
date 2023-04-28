<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="">
        <h1 class="text-5xl font-semibold">Order List</h1>
        <n-breadcrumb class="py-7">
          <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
          <n-breadcrumb-item> Order</n-breadcrumb-item>
          <n-breadcrumb-item> List</n-breadcrumb-item>
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
export default {};
</script>
<style lang=""></style>
