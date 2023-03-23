<template lang="">
  <td>
    <div class="product-item-cart__name">
      <a href="/">
        <img
          class="product-item-cart__image"
          src="../assets/cakes/2.1.jpg"
          alt=""
        />
      </a>
      <a href="/" class="heading-product"> Chocolate </a>
    </div>
  </td>
  <td>123123</td>
  <td>
    <div class="control items-center">
      <input
        class="soluong"
        data-id="1"
        type="number"
        name="1"
        min="1"
        max="99"
        value="1"
      />
    </div>
  </td>
  <td id="total-price-1" class="product-item-cart__total-price">123</td>
  <td>
    <a href="?page=cart&action=delete&id=<?php echo $value['MSHH'] ?>">
      <div class="trash">
        <span
          class="iconify"
          data-icon="eva:trash-2-outline"
          style="color: #637381"
          data-width="22"
          data-height="22"
        ></span>
      </div>
    </a>
  </td>
</template>
<script>
export default {};
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
