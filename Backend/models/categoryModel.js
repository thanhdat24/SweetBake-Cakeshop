const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please tell us description"],
      trim: true,
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
