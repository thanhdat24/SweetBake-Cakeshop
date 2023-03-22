<template lang="">
  <div class="sweeties__item">
    <div class="sweeties__item__img">
      <img src="../assets/cakes/1.2.jpg" alt="image cake" />
    </div>
    <div class="sweeties__item__name line-clamp-2">
      <a>Round Chocolate Truffle Cake</a>
    </div>
    <div class="sweeties__item__prices">
      <div class="sweeties__item__price">350000</div>

      <div class="sweeties__item__original-price">430000</div>
    </div>
    <button class="btn btn--secondary">Add to cart +</button>
  </div>
</template>
<script>
export default {};
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
  height: 188px;
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
