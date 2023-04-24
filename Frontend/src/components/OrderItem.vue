<template lang="">
  <div class="profile__order__item">
    <h6>
      Order #<span style="color: blue; font-weight: 600">{{ order.id }}</span>
    </h6>

    <order-detail-item
      v-for="(orderDetail, index) in order.orderDetail"
      :key="index"
      :orderDetail="orderDetail"
    />
    <div class="profile__order__item__price">
      <b
        >Total price:
        <span class="profile__order__item__info__price">{{
          formatPriceInVND(order.total)
        }}</span>
      </b>
    </div>
    <div class="profile__order__item__detail">
      <n-button class="custom-button text-2xl" @click="handleOrderDetail"
        >View details</n-button
      >
    </div>
  </div>
</template>
<script>
import OrderDetailItem from "./OrderDetailItem.vue";
import { formatPriceInVND } from "../utils/formatNumber";
import { useRouter } from "vue-router";
export default {
  components: {
    OrderDetailItem,
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const handleOrderDetail = () => {
      router.push(`/order-detail/${props.order.id}`);
    };
    return { OrderDetailItem, formatPriceInVND, handleOrderDetail };
  },
};
</script>
<style lang="scss">
.profile__order {
  &__item {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px rgba(44, 44, 44, 0.295);
    padding: 10px 20px;
    border-radius: 30px;
    transition: all 300ms ease-out;
    margin-top: 10px;
    h6 {
      font-size: 2rem;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(194, 194, 194, 0.411);
    }
    &__price,
    &__detail {
      b {
        font-size: 17px;
      }
      margin-top: 10px;
      line-height: 25px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .profile__order__item__info__price {
        color: #ec455a;
        font-weight: bold;
      }
    }
  }
}
</style>
