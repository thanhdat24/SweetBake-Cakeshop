<template lang="">
  <section class="container-fluid best-seller-background">
    <div class="wrapper">
      <section class="container best-seller">
        <!-- left arrow svg -->
        <svg
          class="best-seller__previous-arrow paging-arrow"
          width="34"
          height="35"
          viewBox="0 0 34 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="17"
            cy="17.9402"
            r="16.5"
            transform="rotate(-180 17 17.9402)"
            stroke="#848484"
          />
          <path
            d="M12.2387 16.935L18.8388 11.1495C19.1571 10.8704 19.6732 10.8704 19.9915 11.1495L20.7613 11.8242C21.079 12.1028 21.0797 12.5543 20.7626 12.8335L15.5319 17.4402L20.7626 22.0469C21.0797 22.3261 21.079 22.7776 20.7613 23.0561L19.9915 23.7309C19.6732 24.0099 19.1571 24.0099 18.8388 23.7309L12.2387 17.9454C11.9204 17.6664 11.9204 17.214 12.2387 16.935Z"
            fill="#848484"
          />
        </svg>
        <!-- end left arrow svg -->
        <!-- right arrow svg -->
        <svg
          class="best-seller__next-arrow paging-arrow"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="17" cy="17" r="16.5" stroke="#848484" />
          <path
            d="M21.7613 18.0052L15.1612 23.7907C14.8429 24.0698 14.3268 24.0698 14.0085 23.7907L13.2387 23.1159C12.921 22.8374 12.9203 22.3859 13.2374 22.1067L18.4681 17.5L13.2374 12.8933C12.9203 12.6141 12.921 12.1626 13.2387 11.8841L14.0085 11.2093C14.3268 10.9302 14.8429 10.9302 15.1612 11.2093L21.7613 16.9948C22.0796 17.2738 22.0796 17.7262 21.7613 18.0052Z"
            fill="#848484"
          />
        </svg>
        <!-- end right arrow svg -->

        <h3 class="title">Best Seller</h3>
        <div class="slider">
          <BestSellerItem />
        </div>
        <ul class="paging"></ul>
      </section>
    </div>
  </section>
</template>
<script>
import BestSellerItem from "../components/BestSellerItem.vue";
export default {
  components: { BestSellerItem },
};
</script>
<style lang="css">
.best-seller-background {
  margin: 20px 0;
  background: var(--color-background);
}
.best-seller {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.best-seller__previous-arrow {
  position: absolute;
  width: 35px;
  height: 35px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}
.best-seller__next-arrow {
  position: absolute;
  width: 35px;
  height: 35px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}
</style>
