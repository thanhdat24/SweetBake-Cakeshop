<template lang="">
  <div class="container">
    <h3 class="mt-5">
      Order detail #<span class="text-blue-600">{{ orderDetail.id }}</span>
    </h3>
    <n-steps :current="currentStatus" :status="processStatus">
      <n-step title="In Progress" />
      <n-step title="Shipping" />
      <n-step title="Delivered" />
    </n-steps>
    <p class="text-right">
      <b>Order date: {{ formatDate(orderDetail.createdAt) }}</b>
    </p>
    <div class="products-cart">
      <div class="w-full">
        <div class="products-cart__book">
          <table class="table mb-0">
            <thead>
              <tr>
                <th class="flex justify-center">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>

            <tbody id="product-item">
              <tr
                class="product-item-cart"
                data-id=""
                v-for="(orderDetail, index) in orderDetail.orderDetail"
                :key="index"
                :orderDetail="orderDetail"
              >
                <td>
                  <div class="product-item-cart__name">
                    <a href="">
                      <img
                        class="product-item-cart__image"
                        :src="orderDetail.cakeImage"
                        alt=""
                      />
                    </a>
                    <a href="" class="heading-product">
                      {{ orderDetail.cakeId.name }}
                    </a>
                  </div>
                </td>
                <td>{{ formatPriceInVND(orderDetail.cakeId.price) }}</td>
                <td>
                  <div class="text-center">
                    <span>{{ orderDetail.quantity }}</span>
                  </div>
                </td>
                <td class="product-item-cart__total-price">
                  {{ formatPriceInVND(orderDetail.total) }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td style="white-space: nowrap">
                  <b>Total price: </b>
                </td>
                <td style="color: #ec455a; font-weight: bold; font-size: 18px">
                  {{ formatPriceInVND(orderDetail?.total) }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="products-cart__book__update">
          <router-link to="/profile" class="products-cart__book__update__back"
            ><i class="fa fa-angle-left mr-2 mt-1"></i>Return to my
            orders</router-link
          >
        </div>
      </div>

      <div class="cart-detail__order">
        <div class="cart-detail__order__title">Shipping information</div>
        <div class="cart-detail__order__detail">
          <input
            hidden
            type="text"
            name="MSKH"
            value="<?= $_SESSION['userDetail']['MSKH'] ?>"
          />
          <p><b>Recipient name:</b></p>
          <p class="ml-3">{{ orderDetail.address?.fullName }}</p>
          <p><b>Phone number:</b></p>
          <p class="ml-3">{{ orderDetail.address?.phoneNumber }}</p>

          <div class="cart-detail__order__detail__address">
            <b>Shipping address:</b>
            <p class="mt-3">{{ orderDetail.address?.fullAddress }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { formatPriceInVND } from "../utils/formatNumber";
import { formatDate } from "../utils/formatDate";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const orderId = route.params.orderId;
    store.dispatch("orders/getDetailOrderAction", orderId);
    const orderDetail = computed(() => store.state.orders.orderDetail);
    console.log("orderDetail", orderDetail);
    const currentStatus = computed(() => {
      if (orderDetail.value.status === "In Progress") {
        return 1;
      } else if (orderDetail.value.status === "Shipping") {
        return 2;
      } else {
        return 3;
      }
    });
    const processStatus = computed(() => {
      if (orderDetail.value.status === "In Progress") {
        return "process";
      } else if (orderDetail.value.status === "Shipping") {
        return "process";
      } else {
        return "finish";
      }
    });
    return {
      processStatus,
      currentStatus,
      orderDetail,
      formatPriceInVND,
      formatDate,
    };
  },
};
</script>
<style lang="scss">
.container {
  max-width: 1335px;
  padding: 0 15px;
  margin: 0 auto;
  h3 {
    font-size: 2.2rem;
    font-family: "Nunito", sans-serif;
    margin-bottom: 20px;
    color: #ec455a;
    font-weight: 600;
  }
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
    .cart-detail__order {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.171);
      border-radius: 15px;
      height: 40%;
      width: 100%;
      height: fit-content;
      justify-self: start;
      display: flex;
      flex-direction: column;
      padding: 35px 18px;
      &__detail {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        color: rgb(0, 0, 0);
        p {
          color: #212529;
          font-size: 15px;
          font-weight: normal;
          line-height: 1.1;
          font-family: "Nunito", sans-serif;
        }
        .cart-detail__order__detail__address {
          grid-column: 1 / span 2;
          line-height: 25px;
        }
        .cart-detail__order__detail__total {
          margin-top: 5px;
          grid-column: 1 / span 2;
          button {
            width: 100%;
            margin-top: 10px;
          }
          .price {
            color: #212529;
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
        color: #212529;
        font-size: 20px;
        font-weight: 600;
        line-height: 1.1;
        font-family: "Nunito", sans-serif;
        margin-bottom: 20px;
      }
      &__text {
        line-height: 25px;
        a {
          color: #212529;
          font-weight: 700;
          &:hover {
            text-decoration: underline;
            color: #212529;
          }
        }
        // }
      }
    }
  }
}
</style>
