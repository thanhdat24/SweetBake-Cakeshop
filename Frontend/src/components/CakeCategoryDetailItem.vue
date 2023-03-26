<template lang="">
  <div class="cake-category__item">
    <div class="cake-category__item__img">
      <img src="../assets/cakes/2.1.jpg" alt="image cake" />
    </div>
    <div class="cake-category__item__name line-clamp-2">
      <a>{{ cake.name }}</a>
    </div>
    <div class="cake-category__item__prices">
      <div class="cake-category__item__price">{{ cake.price }}</div>

      <div class="cake-category__item__original-price">
        {{ cake.priceSale }}
      </div>
    </div>
    <button class="btn btn--secondary">Add to cart +</button>
  </div>
</template>
<script>
export default {
  props: {
    cake: {
      type: Object,
    },
  },
};
</script>
<style lang="css">
.cake-category__item {
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

  box-shadow: 0 4px 20px rgb(33 37 41/10%);
  transition: all 0.3s ease-in;
}
.cake-category__item__img {
  overflow: hidden;
  width: 375px;
  height: 290px;
  border-radius: 12px;
}
.cake-category__item:hover {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  transform: scale(1.03);
  opacity: 1;
  transition: all 0.2s ease-in-out;
}

.cake-category__item__name {
  font-style: normal;
  line-height: 2.3rem;
  font-weight: 500;
  font-size: 1.8rem;
  margin: 12px 0 0 0;
}
.cake-category__item__prices {
  align-self: stretch;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0 18px 0;
}
.cake-category__item__price {
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
}
.cake-category__item__original-price {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: var(--color-content);

  text-align: center;
  text-decoration-line: line-through;
}
</style>
