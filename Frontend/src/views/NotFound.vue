<template lang="">
  <!-- component -->
  <main
    class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]"
  >
    <h1 class="text-[121px] font-extrabold text-white tracking-widest">404</h1>
    <div class="bg-[#FF6A3D] px-2 text-[18px] rounded rotate-12 absolute">
      Page Not Found
    </div>
    <button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span
          class="relative block text-[27px] px-8 py-10 bg-[#1A2238] border border-current"
        >
          <router-link to="/">Go Home</router-link>
        </span>
      </a>
    </button>
  </main>
</template>

<script>
export default {};
</script>
<style lang=""></style>
