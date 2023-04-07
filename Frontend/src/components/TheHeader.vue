<template lang="">
  <header>
    <div class="main-header pt-3">
      <div class="px-32 py-1 header">
        <router-link to="/" class="header__logo">
          <img src="../assets/logo.png" alt="logo" />
        </router-link>
        <form class="header__search" action="?page=search" method="post">
          <input type="text" name="key" placeholder="Tìm kiếm bánh..." /><input
            type="image"
            class="header__search__icon"
            src="src/assets/search.svg"
            alt="Search icon"
          />
        </form>

        <div class="header__user flex items-center justify-center">
          <div class="header__user__cart !mr-14">
            <router-link to="/cart"><i class="bi bi-handbag"></i></router-link>
            <span class="header__user__cart__badge">0</span>
          </div>
          <n-dropdown
            :options="options"
            v-if="userLogin"
            size="huge"
            @select="handleSelect"
          >
            <div class="relative">
              <div class="header__user__username flex items-center">
                <span class="mr-4">{{ userLogin.displayName }}</span>
                <div class="header__user__avatar relative">
                  <img :src="userLogin.photoURL" :alt="userLogin.displayName" />
                </div>
              </div>
            </div>
          </n-dropdown>

          <div class="header__login-button" v-else>
            <router-link to="/login"
              ><button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
              >
                Đăng nhập
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { h } from "vue";
import { NIcon } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const userLogin = computed(() => store.state.auths.userLogin);
    const options = [
      {
        label: "Profile",
        key: "profile",
        icon: renderIcon(UserIcon),
      },
      {
        label: "Logout",
        key: "logout",
        icon: renderIcon(LogoutIcon),
      },
    ];
    const handleLogout = () => {
      store.dispatch("auths/logoutUser");
    };
    const handleSelect = (key) => {
      if (key === "profile") {
        router.push("/profile");
      } else if (key === "logout") {
        handleLogout();
      }
    };
    return {
      userLogin,
      handleLogout,
      options,
      handleSelect,
    };
  },
};
</script>
<style lang="scss">
.main-header {
  font-size: 16px;
  .header {
    display: flex;
    justify-content: space-between;
    &__logo {
      display: flex;
      align-items: center;
      img {
        width: 90px;
        margin-right: 50px;
      }
    }
    .header__search {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      position: relative;
      input[type="text"] {
        width: 80%;
        font-size: 17px;
        height: 42px;
        border: none;
        border-radius: 1.5rem;
        background-color: rgba(236, 240, 244, 1) !important;
        outline: none;
        padding: 10px 50px 10px 15px;
        font-family: "Poppins", sans-serif;
        border: solid 2px #ec455b00;
        &:focus {
          transition: all 0.3s ease-in-out !important;
        }
        &::placeholder {
          color: #8a8a8a;
        }
      }
      .header__search__icon {
        position: absolute;
        text-decoration: none;
        width: 18px;
        right: 13%;
        cursor: pointer;
      }
    }
    .header__user {
      justify-content: space-between;

      .header__login-button {
        display: flex;
        align-items: center;
        button {
          font-size: 14px;
          padding: 5px 20px;
          margin-right: 10px;
        }
        .header__menu img {
          width: 18px;
          cursor: pointer;
          display: none;
        }
      }
      &__cart {
        margin-right: 20px;
        position: relative;
        i {
          font-size: 35px;
          color: #ec455a;
        }
        &__badge {
          border-radius: 50%;
          font-size: 12px;
          text-align: center;
          background: #ee9d00;
          color: #fff;
          padding: 2px 5px;
          position: absolute;
          top: 70%;
          left: 70%;
        }
        &:hover {
          opacity: 0.8;
        }
      }
      &__username {
        cursor: pointer;

        color: #ec455a;
        font-size: 16px;
        font-weight: bold;
        line-height: 0;
        font-family: "Nunito", sans-serif;
        &:hover {
          opacity: 0.8;
        }
      }
      &__avatar {
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0);
        box-shadow: 0 0 0 2px #ec455a;
        img {
          object-fit: cover;
          border-radius: 50%;
          width: 100%;
        }
        &:hover {
          opacity: 0.9;
          .header__user__logout {
            display: block;
          }
        }
        .header__login-button {
          display: flex;
          align-items: center;
          button {
            font-size: 14px;
            padding: 5px 20px;
            margin-right: 10px;
          }
        }
        .header__user__logout {
          padding: 10px 0;

          transform: translateX(-16%);
          width: 100px;
          display: none;
          a:hover {
            color: #4b4b4b;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
