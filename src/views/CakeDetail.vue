<template lang="">
  <div class="separate"></div>
  <!-- wrapper detail seller -->
  <section class="main-details-products">
    <div class="container">
      <h3 class="title mt-5 text-center">Cakes Chocolate</h3>
      <div class="book-detail">
        <div class="book-detail__image">
          <img src="../assets/cakes/1.2.jpg" alt="" />
        </div>
        <div class="book-detail__info">
          <div class="book-detail__info__title">Chocolate</div>
          <div class="book-detail__info__rate">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <p class="book-detail__info__reviews">
              <span>(Xem 258 đánh giá)</span>
              <span> | Đã bán 1000+</span>
            </p>
          </div>
          <div class="book-detail__info__price">12000</div>
          <div class="book-detail__info__detail">
            <p class="book-detail__info__detail__title">Mã sách:</p>
            <p class="book-detail__info__detail__title">Thể loại:</p>
            <p>2</p>
            <p>Hihi</p>
          </div>
          <a href="?page=home&action=add&id=<?php echo $item['MSHH'] ?>">
            <button class="btn btn--primary book-detail__button">
              <i class="bi bi-handbag"></i> Thêm vào giỏ +
            </button>
          </a>
        </div>
      </div>
      <div class="book-detail__content">
        <p class="book-detail__content__title">Sơ lược bánh</p>
        <p class="book-detail__content__content">DESC</p>
      </div>

      <h3>Đánh Giá - Nhận Xét Từ Khách Hàng</h3>
    </div>
  </section>
  <!-- end wrapper detail seller-->
</template>
<script>
export default {};
</script>
<style lang="scss">
.main-details-products {
  .container {
    max-width: 1335px;
    padding: 0 15px;
    margin: 0 auto;
    .book-detail {
      gap: 138px;
      margin: 20px 0;
      padding: 40px 20px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.171);
      border-radius: 30px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      &-images {
        width: 45%;
        height: 360px;
        border-radius: 15px;
        overflow: hidden;
      }
      img {
        object-fit: cover;
        border-radius: 25px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.144);
      }
      .book-detail__info {
        justify-self: start;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .book-detail__info__rate {
          i {
            color: rgb(253, 216, 54);
            font-size: 14px;
          }
          .book-detail__info__reviews {
            display: inline-block;
          }
          .book-detail__info__reviews span {
            color: rgb(120, 120, 120);
          }
          .book-detail__info__reviews span:first-child {
            cursor: pointer;
          }
        }
        .book-detail__info__title {
          color: rgb(39, 39, 39);
          font-size: 23px;
          font-weight: bold;
          line-height: 1.1;
          font-family: "Nunito", sans-serif;
          margin: 10px 0;
        }
        .book-detail__info__price {
          color: #ec455a;
          font-size: 23px;
          font-weight: bold;
          line-height: 1.1;
          font-family: "Nunito", sans-serif;
          margin: 10px 0;
        }
        .book-detail__info__detail {
          margin: 20px 0;
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-auto-flow: column;
          grid-gap: 10px;
          width: 70%;
          .book-detail__info__detail__title {
            font-weight: bold;
            font-size: 18px;
          }
        }
        .book-detail__button {
          width: fit-content;
          margin-top: 20px;
        }
      }
    }
    .book-detail__content {
      padding: 20px;
      &__title {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 15px !important;
      }
      &__content {
        text-align: justify;
        color: #000000;
        font-size: 18px;
        font-weight: normal;
        line-height: 25px;
        font-family: "Nunito", sans-serif;
      }
    }
  }
}
</style>
