<template lang="">
  <ul>
    <li class="profile__order__item__book">
      <a href=""
        ><img
          class="profile__order__item__image"
          :src="orderDetail.cakeImage"
          alt="cakeCaption"
        />
      </a>
      <div class="profile__order__item__info">
        <a href="" class="profile__order__item__info__title">
          {{ orderDetail.cakeId.name }}
        </a>
        <p class="profile__order__item__info__price">
          {{ formatPriceInVND(orderDetail.price) }}
        </p>
        <p>Số lượng: {{ orderDetail.quantity }}</p>
      </div>
    </li>
  </ul>
</template>
<script>
import { watch } from "vue";
import { formatPriceInVND } from "../utils/formatNumber";
export default {
  props: {
    orderDetail: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { formatPriceInVND };
  },
};
</script>
<style lang="scss">
.profile__order__item__book {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.171);
    border-radius: 15px;
  }
  img {
    width: 122px;
    height: 120px;

    margin-right: 10px;

    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.158);
    object-fit: cover;
  }
  .profile__order__item__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > * {
      margin-top: 10px;
    }
    &__title {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    &__price {
      color: #ec455a;
      font-weight: bold;
    }
  }
}
</style>
