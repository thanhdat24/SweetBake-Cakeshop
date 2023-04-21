const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please tell us your description"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please tell us your price"],
      trim: true,
    },
    priceSale: {
      type: Number,
      required: [true, "Please tell us your priceSale"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Please tell us your slug"],
    },
    stock: {
      type: Number,
    },
    status: {
      type: String,
      default: "mới",
    },
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    quantitySold: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

cakeSchema.pre(/^find/, function (next) {
  this.populate({
    path: "categoryId",
  });

  next();
});

cakeSchema.virtual("cakeImages", {
  ref: "CakeImages",
  foreignField: "cakeId",
  localField: "_id",
});

const Cake = mongoose.model("Cake", cakeSchema);

module.exports = Cake;
