const mongoose = require("mongoose");

const orderModelSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
      required: true,
    },
    address: {
      fullName: {
        type: String,
        required: true,
        trim: true,
      },
      phoneNumber: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
      },
      fullAddress: {
        type: String,
        required: true,
        trim: true,
      },
    },
    status: {
      type: String,
      default: "Đang xử lý",
    },
    paymentMethod: {
      type: String,
      default: "Tiền mặt khi nhận hàng",
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

orderModelSchema.virtual("orderDetail", {
  ref: "OrderDetail",
  foreignField: "orderId",
  localField: "_id",
});

orderModelSchema.pre(/^find/, function (next) {
  this.populate({
    path: "userId",
    select: "email displayName phoneNumber photoURL address",
  });

  next();
});

const Order = mongoose.model("Order", orderModelSchema);
module.exports = Order;
