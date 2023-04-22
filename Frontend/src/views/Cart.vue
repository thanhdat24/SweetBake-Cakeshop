<template lang="">
  <div class="main-content-products">
    <div class="container">
      <h3 class="title mt-5 text-center">Giỏ hàng</h3>
      <div class="products-cart">
        <div class="w-full">
          <div class="products-cart__book">
            <div class="text-3xl text-gray-500 font-medium mb-10">
              <span class="font-bold text-black">Cart</span> ({{ cart.length }}
              item)
            </div>
            <table class="table" v-if="cart.length > 0">
              <thead>
                <tr>
                  <th class="flex justify-center">Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="product-item">
                <CartItem
                  v-for="(cart, index) in cart"
                  :key="index"
                  :cart="cart"
                />
              </tbody>
            </table>
            <div class="text-center mt-10" v-else>
              <div>
                <img
                  class="h-96"
                  src="../assets/orders/empty_cart.svg"
                  alt=""
                />
                <p class="text-3xl font-bold mt-8">Cart is empty</p>
                <p
                  class="leading-5 text-gray-400 font-medium text-2xl mt-9 mb-24"
                >
                  Look like you have no items in your shopping cart.
                </p>
              </div>
            </div>
          </div>
          <div class="products-cart__book__update">
            <router-link to="/" class="products-cart__book__update__back"
              ><i class="fa fa-angle-left mr-2 mt-1"></i>Continue
              Shopping</router-link
            >
          </div>
        </div>
        <div class="products-cart__totals">
          <div class="heading">Order Summary</div>

          <div class="sub-totals flex items-center justify-between">
            <span>Sub Total</span>
            <span id="subtotal" class="subtotal">{{
              formatPriceInVND(total)
            }}</span>
          </div>
          <div class="discount flex items-center justify-between">
            <span>Discount</span>
            <span class="subtotal">-</span>
          </div>
          <div class="shipping flex items-center justify-between">
            <span>Shipping</span>
            <span class="subtotal">Free</span>
          </div>
          <div class="total flex items-center justify-between">
            <span> Total</span>
            <span id="total-product" class="total-product">{{
              formatPriceInVND(total)
            }}</span>
          </div>
          <div class="my-5">
            <n-input-group>
              <n-input
                :style="{ width: '100%' }"
                size="large"
                placeholder="Nhập mã giảm giá (Nếu có)"
                class="custom-input"
              />
              <n-button type="primary" ghost size="large" class="custom-button">
                Apply
              </n-button>
            </n-input-group>
          </div>
          <router-link
            to="/checkout"
            class="btn btn--primary disabled cursor-default text-center flex justify-center mb-5"
            v-if="disabled"
          >
            Check out
          </router-link>
          <router-link
            to="/checkout"
            class="btn btn--primary text-center flex justify-center mb-5"
            v-else
          >
            Check out
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import CartItem from "../components/CartItem.vue";
import { formatPriceInVND } from "../utils/formatNumber";
export default {
  components: { CartItem },
  setup() {
    const store = useStore();
    store.dispatch("carts/getCart");
    store.dispatch("auths/loadUser");
    const cart = computed(() => store.state.carts.checkout.cart);
    const total = computed(() => store.state.carts.checkout.total);
    const subtotal = computed(() => store.state.carts.checkout.subtotal);
    const totalPrice = ref();
    const disabled = computed(() => cart.value.length === 0);
    console.log(disabled.value);
    return {
      cart,
      total,
      subtotal,
      totalPrice,
      formatPriceInVND,
      disabled,
    };
  },
};
</script>
<style lang="scss">
.main-content-products {
  .container {
    max-width: 1335px;
    padding: 0 15px;
    margin: 0 auto;
    .products-cart {
      margin-top: 15px;
      display: grid;
      grid-template-columns: 2.3fr 1fr;
      justify-items: center;
      gap: 20px;
      &__book {
        width: 100%;
        padding: 14px 20px;
        background-color: rgb(255, 255, 255);
        color: rgb(33, 43, 54);
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-image: none;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.17);
        border-radius: 16px;
        z-index: 0;
        margin-bottom: 20px;
        .heading-cart {
          font-size: 30px;
        }

        .control {
          border-radius: 4px;
          background-color: #f5f5f5;
          display: inline-flex;
          padding: 0px 5px;
          padding-top: 5px;

          input {
            width: 80px;
            padding: 5px 10px;
            outline: none;
            border-radius: 8px;
            border: 2px solid rgb(228, 228, 228);
            transition: all 200ms ease-out;
            &:focus {
              border: 2px solid #ec455b8c;
              transition: all 200ms ease-in;
            }
          }

          a {
            display: block;

            i {
              font-size: 24px;
              font-weight: 700;
            }
          }
        }

        .trash {
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          &:hover {
            background-color: rgba(99, 115, 129, 0.08);
          }
        }

        table.table {
          width: 100%;
          border-collapse: collapse;
          thead {
            color: rgb(99, 115, 129);
            background-color: rgb(244, 246, 248);
          }
          thead,
          tfoot {
            tr {
              td {
                padding: 20px 12px;
              }
            }
          }
          thead,
          tbody {
            padding-top: 10px;
            tr {
              padding-bottom: 10px;
              .heading-product {
                color: #4b4b4b;
                font-size: 15px;
                font-weight: 600;
                line-height: 1.3;
                font-family: "Nunito", sans-serif;
              }

              th:first-child {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
                box-shadow: rgb(255, 255, 255) 8px, 0px, 0px, inset;
              }
              th:last-of-type {
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
                box-shadow: rgb(255, 255, 255) -8px, 0px, 0px, inset;
              }
              th:nth-of-type(2),
              :nth-of-type(4),
              :nth-of-type(3) {
                white-space: nowrap;
              }
              th,
              td {
                border-right: 0;
                border-top: 0;
                border-bottom: 0;
                padding: 20px 15px;
                text-align: left;
                vertical-align: middle;
              }

              td {
                font-size: 16px;
                vertical-align: middle;
                &:last-child {
                  color: #ec455a;
                  font-weight: bold;
                }
                .product-item-cart__image {
                  width: 199px;
                  height: 150px;
                  margin-right: 10px;
                  border-radius: 16px;
                  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.16);
                  object-fit: cover;
                }
              }
            }
          }
          #product-item tr:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.17);
            border-radius: 16px;
          }
        }
        &__update {
          display: flex;
          text-align: center;
          justify-content: space-between;
          margin-bottom: 10px;
          &__back {
            display: flex;
            align-items: center;
            padding: 6px 8px;
            color: #000 !important;
            font-weight: 600;
            i {
              font-size: 20px;
              font-weight: 600;
            }
            &:hover {
              background-color: rgba(145, 158, 171, 0.08);
              border-radius: 8px;
              padding: 6px 8px;
              color: #000;
            }
          }
        }
      }
      .products-cart__totals {
        font-weight: 700;
        width: 100%;
        padding: 0 20px;
        background-color: rgb(255, 255, 255);
        color: rgb(33, 43, 54);
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-image: none;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.17);
        border-radius: 16px;
        z-index: 0;
        height: fit-content;
        margin-bottom: 24px;
        .heading {
          margin: 40px 0 30px;
          font-size: 25px;
        }

        .sub-totals,
        .discount,
        .shipping {
          padding: 15px 0px;

          color: rgb(99, 115, 129);
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
          font-family: "Nunito", sans-serif;
          .subtotal {
            color: #212b36;
            font-weight: 500;
          }
        }
        .shipping {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .total {
          font-size: 20px;
          padding: 15px 0px;

          span {
            &:last-child {
              color: #ec455a;
            }
          }
        }

        .checkout {
          padding: 10px 0px;
          align-items: center;
          display: flex;
          width: 100%;
          text-align: center;
          .btn-checkout {
            box-shadow: rgba(171, 0, 37, 0.24) 0px 8px 16px;
          }
          a {
            padding: 10px 20px;
            width: 100%;
          }
        }
      }

      &__book__empty {
        width: 96%;
        height: 68%;
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
      .totals__empty {
        height: 70%;
      }
    }
  }
}
</style>
