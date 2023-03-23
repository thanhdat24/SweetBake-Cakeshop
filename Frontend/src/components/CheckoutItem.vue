<template lang="">
  <li class="cart-detail__book__item">
    <a href=""
      ><img
        class="cart-detail__book__item__image"
        src="../assets/cakes/1.2.jpg"
        alt=""
      />
    </a>
    <div class="cart-detail__book__item__info">
      <a href="1" class="cart-detail__book__item__info__title"> Chocolate </a>
      <input type="number" hidden id="1" value="2000" />
      <p class="cart-detail__book__item__info__price">500000đ</p>
      <label class="cart-detail__book__item__info__number" for="2"
        >Số lượng: 5</label
      >
    </div>
  </li>
</template>
<script>
export default {};
</script>
<style lang="scss">
.cart-detail__book__item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.171);
    border-radius: 15px;
  }
  img {
    width: 199px;
    height: 150px;

    margin-right: 10px;

    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.158);
    object-fit: cover;
  }
  .cart-detail__book__item__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > * {
      margin-top: 10px;
    }
    .cart-detail__book__item__info__title {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    .cart-detail__book__item__info__price {
      color: #ec455a;
      font-weight: bold;
    }
    .cart-detail__book__item__info__number {
      input {
        width: 80px;
        padding: 5px 10px;
        outline: none;

        border-radius: 8px;
        border: 2px solid rgb(228, 228, 228);
        transition: all 200ms ease-out;
      }
      &:focus {
        border: 2px solid #ec455b8c;
        transition: all 200ms ease-in;
      }
    }
  }
}
</style>
