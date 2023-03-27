const factory = require("../controllers/handlerFactory");
const CakeImages = require("../models/cakeImagesModel");

exports.getDetailCakeImages = factory.getOne(CakeImages);
exports.updateCakeImages = factory.updateOne(CakeImages);
exports.deleteCakeImages = factory.deleteOne(CakeImages);
exports.createCakeImages = factory.createOne(CakeImages);
exports.getAllCakeImages = factory.getAll(CakeImages);
