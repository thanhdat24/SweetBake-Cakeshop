const factory = require("../controllers/handlerFactory");
const Cake = require("../models/cakeModel");
const cakeImages = require("../models/cakeImagesModel");
const catchAsync = require("../utils/catchAsync");
const { paramCase, capitalCase } = require("change-case");
const CakeImages = require("../models/cakeImagesModel");
const mongoosePaginate = require("mongoose-paginate-v2");

exports.updateCake = catchAsync(async (req, res, next) => {
  const _id = req.params.id;
  req.body.slug = paramCase(req.body.name);
  const doc = await Cake.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    result: doc.length,
    data: doc,
  });
});
exports.deleteCake = catchAsync(async (req, res, next) => {
  const doc = await Cake.findByIdAndDelete(req.params.id);
  await CakeImages.findOneAndDelete({
    cakeId: req.params.id,
  });

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(201).json({
    status: "success",
    data: "Xóa thành công!",
  });
});
exports.createCake = catchAsync(async (req, res, next) => {
  const fileData = req.file;
  req.body.slug = paramCase(req.body.name);
  const doc = await Cake.create(req.body);
  if (doc) {
    let newImages = {
      url: fileData?.path,
      cakeId: doc.id,
    };
    await cakeImages.create(newImages);
    res.status(201).json({
      status: "success",
      result: doc.length,
      data: doc,
    });
  }
});
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
  const page = parseInt(req.query.page) || 1;
  const limit = 8;
  const skip = (page - 1) * limit;

  const count = await Cake.countDocuments();
  const totalPages = Math.ceil(count / limit);

  let query = Cake.find()
    .sort({ "categoryId.name": 1 })
    .populate("cakeImages")
    .skip(skip)
    .limit(limit);

  const doc = await query;

  const filteredCakes = doc.map((cake) => ({
    ...cake.toObject(),
    cakeImages: cake.cakeImages.map((image) => ({
      _id: image._id,
      url: image.url,
      caption: image.caption,
    })),
  }));

  filteredCakes.sort((a, b) =>
    a.categoryId.name.localeCompare(b.categoryId.name)
  );
  res.status(200).json({
    status: "success",
    result: filteredCakes.length,
    page,
    totalPages,
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
