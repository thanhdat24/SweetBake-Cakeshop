const mongoose = require("mongoose");

const orderDetailModelSchema = new mongoose.Schema(
  {
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },

    orderId: {
      type: mongoose.Schema.ObjectId,
      ref: "Order",
    },
    cakeId: {
      type: mongoose.Schema.ObjectId,
      ref: "Cake",
    },
    cakeImage: { type: String },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

orderDetailModelSchema.pre(/^find/, function (next) {
  this.populate({
    path: "cakeId",
  }).populate({
    path: "orderId",
  });

  next();
});

const OrderDetail = mongoose.model("OrderDetail", orderDetailModelSchema);
module.exports = OrderDetail;
