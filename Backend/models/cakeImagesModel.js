const mongoose = require("mongoose");
const cakeImagesSchema = new mongoose.Schema(
  {
    url: {
      type: Array,
      required: [true, "Please tell us url"],
      trim: true,
    },
    caption: {
      type: String,
      default: "Cake Images",
    },
    cakeId: {
      type: mongoose.Schema.ObjectId,
      ref: "Cake",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

cakeImagesSchema.pre(/^find/, function (next) {
  this.populate({
    path: "cakeId",
  });

  next();
});
const CakeImages = mongoose.model("CakeImages", cakeImagesSchema);

module.exports = CakeImages;
