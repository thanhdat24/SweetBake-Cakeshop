<template lang="">
  <div class="container">
    <div class="profile">
      <div class="profile__item">
        <h3>Account information</h3>
        <div class="profile__item__card">
          <div class="profile__item__card__avatar">
            <span class="profile__item__card__span">
              <img
                :src="userLogin.photoURL"
                :alt="userLogin.displayName"
                class="profile__item__card__img"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="profile__item">
        <form action="" method="post" class="profile__info">
          <input hidden type="text" name="MSKH" value="" />
          <label for="name">Full Name: </label>
          <n-input
            v-model:value="userLogin.displayName"
            type="text"
            name="displayName"
            placeholder="Full Name"
            size="large"
          />
          <!-- <input type="text" name="HoTenKH" id="name" value="" /> -->
          <label for="email">Email: </label>
          <n-input
            v-model:value="userLogin.email"
            type="text"
            name="email"
            :disabled="!active"
            placeholder="Basic Input"
            size="large"
          />
          <label for="phone">Phone: </label>
          <n-input
            v-model:value="userLogin.phoneNumber"
            type="text"
            name="phoneNumber"
            placeholder="Phone"
            size="large"
          />
          <label for="address">Address: </label>
          <n-input
            v-model:value="userLogin.address"
            name="userLogin.address"
            type="textarea"
            placeholder="Address"
            size="large"
          />
          <button name="btn_update" class="btn btn--primary">
            Update Info
          </button>
        </form>
      </div>
    </div>
    <div class="profile__order">
      <h3>Order history</h3>
      <order-item
        v-for="(order, index) in orderUser.data"
        :key="index"
        :order="order"
      />
    </div>
    <n-pagination
      class="mt-10 flex justify-center"
      v-model:page="page"
      :page-count="orderUser.totalPages"
    />
  </div>
</template>
<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import OrderItem from "../components/OrderItem.vue";
export default {
  components: { OrderItem },
  setup() {
    const store = useStore();
    const page = ref(1);
    store.dispatch("auths/loadUser");
    store.dispatch("orders/getMeOrderAction");
    const userLogin = computed(() => store.state.auths.userLogin);
    const orderUser = computed(() => store.state.orders.orderUser);
    console.log("orderUser", orderUser);
    watch(
      () => page.value,
      (newVal, oldVal) => {
        store.dispatch("orders/getMeOrderAction", newVal);
      }
    );
    return { page, userLogin, orderUser };
  },
};
</script>
<style lang="scss">
.container {
  max-width: 1335px !important;
  padding: 0 15px;
  margin: 0 auto;
  .profile {
    margin: 20px 0;
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    gap: 30px;
    &__item h3 {
      font-size: 2.2rem;
      font-family: "Nunito", sans-serif;
      margin-bottom: 20px;
      color: #ec455a;
      font-weight: 600;
    }

    &:focus {
      border: 2px solid #ec455b8c;
      transition: all 200ms ease-in;
    }
    label {
      font-weight: bold;
      font-family: "Nunito", sans-serif;
    }
    &__item form {
      display: grid;
      grid-template-columns: 0.5fr 1fr;
      grid-auto-flow: row;
      gap: 10px;
      align-items: center;

      border-radius: 30px;
      padding: 30px 40px;
      box-shadow: 0 0 5px rgba(44, 44, 44, 0.295);
    }
    &__item__card {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      padding: 30px 0;
      height: 75%;
      box-shadow: 0 0 5px rgba(44, 44, 44, 0.295);
      position: relative;
      &__avatar {
        width: 135px;
        height: 135px;
        border-radius: 100%;
        border: 2px dashed #ec455a;
        color: #212b36;
        display: inline-flex;
        line-height: 24px;
        padding: 8px;
        text-align: center;
      }
      &__span {
        overflow: hidden;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
      &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__item button {
      justify-self: center;
      margin-top: 20px;
      width: fit-content;
      grid-column: 1 / span 2;
    }
    &__info {
      margin-top: 50px;
    }
    &__order {
      h3 {
        font-size: 2.2rem;
        font-family: "Nunito", sans-serif;
        margin-bottom: 20px;
        color: #ec455a;
        font-weight: 600;
      }
    }
  }
}
</style>
