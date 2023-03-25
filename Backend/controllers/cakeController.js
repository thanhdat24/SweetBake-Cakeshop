const factory = require('../controllers/handlerFactory');
const Cake = require('../models/cakeModel');

exports.getDetailCake = factory.getOne();
exports.updateCake = factory.updateOne(Cake);
exports.deleteCake = factory.deleteOne(Cake);
exports.createCake = factory.createOne(Cake);
exports.getAllCake = factory.getAll(Cake);
