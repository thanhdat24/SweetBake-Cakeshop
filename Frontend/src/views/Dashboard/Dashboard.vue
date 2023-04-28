<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div class="w-[300px] h-full bg-gray-200 text-white" v-show="showSide">
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold text-xl">Admin Dashboard</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <router-link
              to="/admin/categories"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-2xl font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-8 w-[22px] h-[22px] fill-current"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 20 20"
              >
                <g fill="none">
                  <path
                    d="M8 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-6-1A1.5 1.5 0 0 1 3.5 14h1A1.5 1.5 0 0 1 6 15.5v1A1.5 1.5 0 0 1 4.5 18h-1A1.5 1.5 0 0 1 2 16.5v-1zm0-6A1.5 1.5 0 0 1 3.5 8h1A1.5 1.5 0 0 1 6 9.5v1A1.5 1.5 0 0 1 4.5 12h-1A1.5 1.5 0 0 1 2 10.5v-1zm0-6A1.5 1.5 0 0 1 3.5 2h1A1.5 1.5 0 0 1 6 3.5v1A1.5 1.5 0 0 1 4.5 6h-1A1.5 1.5 0 0 1 2 4.5v-1z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              Categories
            </router-link>
            <router-link
              to="/admin/cakes"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-2xl font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-8 w-[22px] h-[22px] fill-current"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 448 512"
              >
                <path
                  d="M448 384c-28.02 0-31.26-32-74.5-32c-43.43 0-46.825 32-74.75 32c-27.695 0-31.454-32-74.75-32c-42.842 0-47.218 32-74.5 32c-28.148 0-31.202-32-74.75-32c-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32c27.951 0 31.253 32 74.75 32c42.843 0 47.217-32 74.5-32c28.148 0 31.201 32 74.75 32c43.357 0 46.767-32 74.75-32c27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32c0-31 32-23 32-64c12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32c0-31 32-23 32-64c12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32c0-31 32-23 32-64c12 0 32 29.5 32 56s-14.25 40-32 40z"
                  fill="currentColor"
                ></path>
              </svg>

              Cakes
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div
        class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
      >
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-[25px] h-[25px]"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
        <!-- Search bar -->

        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center">
            <!-- Search bar -->
          </div>
          <!-- User login -->
          <div class="w-[200px]">
            <div
              class="flex items-center justify-start space-x-4"
              @click="toggleDrop"
            >
              <img
                class="w-10 h-10 rounded-full border-2 border-gray-50"
                src="https://th.bing.com/th/id/OIP.G5--BKa_cqF_G9CAZAoI5wHaHa?pid=ImgDet&rs=1"
                alt=""
              />
              <div class="font-semibold">
                <div>Madona ,Dev OP</div>
                <div class="text-xs text-gray-500">Admin</div>
              </div>
            </div>
            <!-- Drop down -->
            <div
              v-show="showDropDown"
              class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-2xl"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >Account settings</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-2xl"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Support</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-2xl"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >License</a
                >
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    class="text-gray-700 block w-full px-4 py-2 text-left text-2xl"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
        <router-view></router-view>
      </div>
    </div>
    <!-- Main  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDropDown: false,
      showSide: true,
    };
  },
  methods: {
    // hide show side bar
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
    // toggle user
    toggleDrop() {
      this.showDropDown = !this.showDropDown;
    },
  },
};
</script>

<style></style>
