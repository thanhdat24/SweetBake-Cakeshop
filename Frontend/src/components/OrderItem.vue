<template lang="">
  <div class="profile__order__item">
    <div class="flex items-center mb-4">
      <h6>
        Order #<span style="color: blue; font-weight: 600">{{ order.id }}</span>
      </h6>
      <n-tag class="ml-10 !rounded-lg font-semibold" :type="orderStatus">
        {{ order.status }}
      </n-tag>
    </div>
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
import { computed } from "vue";
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
    const orderStatus = computed(() => {
      if (props.order.status === "In Progress") {
        return "warning";
      } else if (props.order.status === "Delivered") {
        return "success";
      } else {
        return "info";
      }
    });
    return {
      orderStatus,
      OrderDetailItem,
      formatPriceInVND,
      handleOrderDetail,
    };
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
