<template lang="">
  <router-link :to="`/cake/${cake.slug}`" class="sweeties__item">
    <div class="sweeties__item__img">
      <img :src="cake.cakeImages[0].url" :alt="cake.cakeImages[0].caption" />
    </div>
    <div class="sweeties__item__name line-clamp-2">
      <a>{{ cake.name }}</a>
    </div>
    <div class="sweeties__item__prices items-center">
      <div class="sweeties__item__price">
        {{ formatPriceInVND(cake.price) }}
      </div>

      <div class="sweeties__item__original-price">
        {{ formatPriceInVND(cake.priceSale) }}
      </div>
    </div>
    <button class="btn btn--secondary" @click.prevent="handleAddToCart">
      Add to cart +
    </button>
  </router-link>
</template>
<script>
import { useMessage } from "naive-ui";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { formatPriceInVND } from "../utils/formatNumber";
export default {
  props: {
    cake: {
      type: Object,
    },
  },

  setup(props) {
    const store = useStore();
    const message = useMessage();
    const handleAddToCart = async () => {
      await store.dispatch("carts/addToCartAction", props.cake);
      message.success("Thêm sản phẩm thành công");
    };
    return { handleAddToCart, formatPriceInVND };
  },
};
</script>
<style lang="css">
.sweeties__item {
  border-radius: 12px;
  overflow: hidden;
  padding: 10px;
  transition: all 0.3s ease-in;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: var(--font-poppins);
}
.sweeties__item__img {
  overflow: hidden;
  width: 250px;
  height: 250px;
  border-radius: 12px;
}

.sweeties__item:hover {
  box-shadow: 0 0 22px rgba(37, 37, 37, 0.267);
  transition: all 0.3s ease-in;
}

.sweeties__item__name {
  font-style: normal;
  line-height: 2.3rem;
  font-weight: 500;
  font-size: 1.8rem;
  margin: 12px 0 0 0;
}
.sweeties__item__prices {
  align-self: stretch;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0 18px 0;
}
.sweeties__item__price {
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
}
.sweeties__item__original-price {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: var(--color-content);

  text-align: center;
  text-decoration-line: line-through;
}
</style>
