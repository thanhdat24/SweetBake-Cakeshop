<template lang="">
  <tr class="product-item-cart">
    <td>
      <div class="product-item-cart__name">
        <a href="/">
          <img
            class="product-item-cart__image"
            :src="cart.cakeImages?.[0].url"
            :alt="cart.cakeImages?.[0].caption"
          />
        </a>
        <a href="/" class="heading-product"> {{ cart.name }} </a>
      </div>
    </td>
    <td>{{ formatPriceInVND(cart.price) }}</td>
    <td>
      <div class="flex items-center flex-col">
        <n-input-number
          v-model:value="quantity"
          :validator="validator"
          @update:value="handleChangeQuantity($event, cart)"
          class="w-32"
          :min="1"
          :max="cart.stock"
        />
        <p class="pt-5 text-2xl">Stock: {{ cart.stock }}</p>
      </div>
    </td>
    <td id="total-price-1" class="product-item-cart__total-price">
      {{ formatPriceInVND(cart.price * quantity) }}
    </td>
    <td>
      <n-button
        circle
        color="rgba(99, 115, 129, 0.08)"
        @click="handleDeleteCart(cart)"
      >
        <n-icon
          size="22"
          :component="TrashOutline"
          class="flex"
          color="rgb(99, 115, 129)"
        />
      </n-button>
    </td>
  </tr>
</template>
<script>
import { ref, watch, defineEmits } from "vue";
import { useMessage } from "naive-ui";
import { useStore } from "vuex";
import { formatPriceInVND } from "..//utils/formatNumber";
import { TrashOutline } from "@vicons/ionicons5";
export default {
  props: {
    cart: {
      type: Object,
    },
  },
  setup(props) {
    const message = useMessage();
    const store = useStore();
    const quantity = ref(props.cart.quantity);
    const validator = (x) => x > 0;

    const handleChangeQuantity = async (quantity, cart) => {
      await store.dispatch("carts/updateQuantityCart", { ...cart, quantity });
      await store.dispatch("carts/getCart");
    };

    const handleDeleteCart = async (cart) => {
      await store.dispatch("carts/deleteCart", cart);
      await store.dispatch("carts/getCart");
      message.success("Xóa sản phẩm thành công");
    };
    return {
      quantity,
      validator,
      handleChangeQuantity,
      formatPriceInVND,
      TrashOutline,
      handleDeleteCart,
    };
  },
};
</script>
<style lang="scss">
.product-item-cart {
  padding: 20px;
  // border: 1px solid #ccc;
  margin-bottom: 20px;
  &__name {
    gap: 10px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }
  &__total-price {
    color: #ec455a;
    font-weight: 500;
  }
}
</style>
