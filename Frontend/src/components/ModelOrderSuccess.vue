<template lang="">
  <n-modal
    v-model:show="createOrderSuccess.status"
    transform-origin="center"
    :mask-closable="false"
  >
    <n-card
      class="text-center"
      style="width: 600px"
      title="Thank you for your purchase!"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <img src="../assets/orders/order_success.svg" class="h-96" />
      <div class="mt-10 text-2xl font-medium">
        <p class="mb-10">Thanks for placing order</p>
        <router-link to="/" class="text-green-500">{{
          createOrderSuccess._id
        }}</router-link>
        <div class="mt-10 font-normal">
          <p>We will send you a notification within 5 days when it ships.</p>
          <p>
            If you have any question or queries then fell to get in contact us.
          </p>
        </div>
        <p class="mt-5 font-normal">All the best,</p>
      </div>
      <hr class="mt-14" />
      <n-space justify="center" class="mt-10">
        <n-button class="p-8 text-2xl rounded-xl" @click="handleBack"
          ><i class="fa fa-angle-left mr-4 mt-1 text-3xl"> </i>Continue
          Shopping</n-button
        >
        <n-button
          type="success"
          class="button-green p-8 text-2xl rounded-xl"
          @click="handleOrderMe"
          >My order <i class="fa fa-angle-right ml-4 mt-1 text-3xl"> </i
        ></n-button>
      </n-space>
    </n-card>
  </n-modal>
</template>
<script>
import { useMessage } from "naive-ui";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const message = useMessage();
    const createOrderSuccess = computed(
      () => store.state.orders.createOrderSuccess
    );

    const handleBack = () => {
      store.dispatch("carts/resetCart");
      router.push("/");
    };
    const handleOrderMe = () => {
      store.dispatch("carts/resetCart");
      router.push("/profile");
    };
    console.log("createOrderSuccess", createOrderSuccess.value);
    return { createOrderSuccess, handleBack, handleOrderMe };
  },
};
</script>
<style lang="css">
.n-card-header__main {
  font-size: 2.5rem;
  font-weight: bold !important;
  font-family: "Roboto", sans-serif;
}
</style>
