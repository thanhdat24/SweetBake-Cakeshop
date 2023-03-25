const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const cloudinary = require("../utils/cloudinary");
const { capitalCase } = require("change-case");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(201).json({
      status: "success",
      data: "Xóa thành công!",
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    if (req.body.photoURL) {
      const uploadedResponse = await cloudinary.uploader.upload(
        req.body.photoURL,
        {
          upload_preset: "avatar",
        }
      );
      req.body.photoURL = uploadedResponse.secure_url;
    }
    const _id = req.params.id;
    const doc = await Model.findByIdAndUpdate(_id, req.body, {
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

exports.createOne = (Model, uploadCloudName, imageModelName) =>
  catchAsync(async (req, res, next) => {
    if (imageModelName && imageModelName === "photo") {
      if (req.body.photo) {
        const uploadedResponse = await cloudinary.uploader.upload(
          req.body.photo,
          {
            upload_preset: uploadCloudName,
          }
        );
        req.body.photo = uploadedResponse.secure_url;
      }
    }

    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      result: doc.length,
      data: doc,
    });
  });

exports.getOne = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOptions) query = query.populate(populateOptions);
    const doc = await query;
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      length: 1,
      data: doc,
    });
  });

exports.getAll = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.find(req.query).sort({ createdAt: -1 });
    if (populateOptions) query = query.populate(populateOptions);
    const doc = await query;

    res.status(200).json({
      status: "success",
      result: doc.length,
      data: doc,
    });
  });
