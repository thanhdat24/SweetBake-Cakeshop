<template lang="">
  <div class="best-seller__item slider__item">
    <img
      class="best-seller__item-image"
      src="../assets/cakes/2.1.jpg"
      alt="image"
    />
    <div class="best-seller__item-info">
      <div>
        <h6 class="best-seller__item-info__name">
          <a>Snicker Fuse Chocolate Cake</a>
        </h6>
        <p class="best-seller__item-info__description line-clamp-5">
          ward yourself with this rich chocolate cake wonderfully crammed with
          Cadbury Fuse and white chocolate chunks and draped lusciously with
          molten chocolate.This perfect work of art hides in every bite, the
          scrumptious flavours of heavily whipped chocolate cream and nutty bits
          of chocolate that is a little nutty and a lot of tasty!
        </p>
      </div>
      <div>
        <div class="best-seller__item-info__price">200000</div>
        <div class="best-seller__item-info__original-price">250000</div>
      </div>
      <button class="btn btn--primary">Add to cart +</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.best-seller__item {
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.best-seller__item-image {
  width: 45%;
  border-radius: 20px;
  filter: drop-shadow(2px 4px 24px rgba(0, 0, 0, 0.14));
}
.best-seller__item-info {
  width: 45%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.best-seller__item-info__name {
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  color: var(--color-title);
  line-height: 4.5rem;
  margin: 10px 0;
}
.best-seller__item-info__description {
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  color: var(--color-content);
  line-height: 2.7rem;
}
.best-seller__item-info__price {
  font-style: normal;
  font-weight: bold;
  font-size: 3.5rem;
  line-height: 121.5%;
  color: var(--color-primary);
  margin: 5px 0;
}
.best-seller__item-info__original-price {
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  color: var(--color-content);
  text-decoration: line-through;
  opacity: 0.8;
  margin-bottom: 10px;
}
</style>
