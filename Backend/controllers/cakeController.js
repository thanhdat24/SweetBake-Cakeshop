const factory = require("../controllers/handlerFactory");
const Cake = require("../models/cakeModel");
const cakeImages = require("../models/cakeImagesModel");
const catchAsync = require("../utils/catchAsync");
const { paramCase, capitalCase } = require("change-case");

exports.updateCake = factory.updateOne(Cake);
exports.deleteCake = factory.deleteOne(Cake);
exports.createCake = factory.createOne(Cake);
// exports.getAllCake = factory.getAll(Cake, {
//   path: "cakeImages",
// });
exports.getCakeDetail = catchAsync(async (req, res, next) => {
  const { cakeName } = req.query;
  let query = Cake.find({ name: capitalCase(cakeName) }).populate("cakeImages");
  const doc = await query;
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  const filteredCakes = doc.map((cake) => ({
    ...cake.toObject(),
    cakeImages: cake.cakeImages.map((image) => ({
      _id: image._id,
      url: image.url,
      caption: image.caption,
    })),
  }));
  res.status(200).json({
    status: "success",
    length: 1,
    data: filteredCakes[0],
  });
});

exports.getAllCake = catchAsync(async (req, res, next) => {
  let query = Cake.find(req.query)
    // .sort({ createdAt: -1 })
    .populate("cakeImages");
  const doc = await query;

  const filteredCakes = doc.map((cake) => ({
    ...cake.toObject(),
    cakeImages: cake.cakeImages.map((image) => ({
      _id: image._id,
      url: image.url,
      caption: image.caption,
    })),
  }));

  res.status(200).json({
    status: "success",
    result: filteredCakes.length,
    data: filteredCakes,
  });
});

exports.getCakeByCategory = catchAsync(async (req, res, next) => {
  const { categoryName } = req.query;
  console.log("categoryName", categoryName);

  const cake = await Cake.find().populate("categoryId cakeImages");
  const newCake = cake.filter(
    (item) => paramCase(item.categoryId.name) === categoryName
  );

  const filteredCakes = newCake.map((cake) => ({
    ...cake.toObject(),
    cakeImages: cake.cakeImages.map((image) => ({
      _id: image._id,
      url: image.url,
      caption: image.caption,
    })),
  }));

  res.status(200).json({
    status: "success",
    length: filteredCakes.length,
    data: filteredCakes,
  });
});
