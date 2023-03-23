<template lang="">
  <div class="main-content-checkout">
    <div class="container">
      <h3 class="title mt-5 text-center">Thanh toán</h3>
      <form id="checkout" action="" method="post">
        <div class="cart-detail">
          <ul class="cart-detail__book">
            <CheckoutItem />
          </ul>
          <div class="cart-detail__user-info">
            <div class="cart-detail__user-info__title">Thông tin nhận hàng</div>
            <div class="cart-detail__user-info__detail">
              <input hidden type="text" name="MSKH" value="123" />
              <p><b>Tên người nhận:</b></p>
              <p class="ml-3">Le Thanh Dat</p>
              <p><b>Số điện thoại:</b></p>
              <p class="ml-3">0916671369</p>
              <div class="cart-detail__user-info__detail__address">
                <b>Địa chỉ nhận hàng:</b>
                <div>
                  <textarea
                    name="DiaChi"
                    rows="3"
                    cols="50"
                    id="5"
                    placeholder="Nhập địa chỉ giao hàng của bạn..."
                  ></textarea>
                </div>
              </div>

              <div class="cart-detail__user-info__detail__total">
                <b>Tổng tiền:</b>
                <b id="total" class="price"> 11111111</b>
              </div>
              <div class="cart-detail__user-info__detail__total">
                <button class="btn btn--primary" name="btn-order">
                  Đặt mua
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import CheckoutItem from "../components/CheckoutItem.vue";
export default {
  components: { CheckoutItem },
};
</script>
<style lang="scss">
.main-content-checkout {
  .container {
    max-width: 1335px;
    padding: 0 15px;
    margin: 0 auto;
    .cart-detail {
      margin: 20px 0;
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      justify-items: center;
      gap: 20px;
      &__book__empty {
        width: 96%;
        height: 77%;
        padding: 14px 20px;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.17);
        border-radius: 16px;
        z-index: 0;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        position: relative;
        img {
          width: 100%;
          height: 57%;
          margin-bottom: 15px;
        }
        p {
          margin: 0px;
          line-height: 1.57143;
          font-size: 16px;
          font-weight: 400;
          color: rgb(99, 115, 129);
        }
      }
      ul {
        margin-bottom: 0px !important;
      }
      .cart-detail__book {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.171);
        border-radius: 30px;
        padding: 40px 20px;

        width: 100%;
      }
      .cart-detail__user-info {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.171);
        border-radius: 15px;
        width: 100%;
        height: fit-content;
        justify-self: start;
        display: flex;
        flex-direction: column;
        padding: 40px 30px;
        &__detail {
          display: grid;
          grid-template-columns: 0.5fr 1fr;
          gap: 10px;
          color: rgb(0, 0, 0);
          .cart-detail__user-info__detail__address {
            grid-column: 1 / span 2;
            line-height: 25px;
          }
          .cart-detail__user-info__detail__total {
            margin-top: 5px;
            grid-column: 1 / span 2;
            button {
              width: 100%;
              margin-top: 10px;
            }
            .price {
              color: #ec455a;
            }
          }
          input {
            font-family: "Nunito", sans-serif;
            border-radius: 15px;
            border: 2px solid rgba(192, 192, 192, 0);
            outline: none;
            padding: 7px 17px;
            background-color: #e4e3e3b8;
            transition: all 200ms ease-out;
            &:focus {
              border: 2px solid #ec455b8c;
              transition: all 200ms ease-in;
            }
          }
          input[type="text"] {
            font-size: 15px;
          }
          textarea {
            width: 100%;
            border: 2px solid rgb(228, 228, 228);
            transition: all 200ms ease-out;
            margin-top: 20px;
            padding: 7px;
            &:focus {
              border: 2px solid #ec455b8c;
              transition: all 200ms ease-in;
            }
          }
        }
        &__title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        &__text {
          line-height: 25px;
          a {
            color: #ec455a;
            font-weight: 700;
            &:hover {
              text-decoration: underline;
              color: #ec455a;
            }
          }
          // }
        }
      }
    }
  }
}
</style>
