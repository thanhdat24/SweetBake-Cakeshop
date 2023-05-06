const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("../controllers/handlerFactory");

exports.getAllUsers = factory.getAll(User);
exports.getDetailUser = factory.getOne(User);
// Do Not update password with this
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

const filterObj = (obj, ...allowedField) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedField.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.updateMe = catchAsync(async (req, res, next) => {
  const fileData = req.file;

  // 2) Update user document
  // Get filtered name and email
  const filteredBody = filterObj(
    req.body,
    "displayName",
    "phoneNumber",
    "photoURL",
    "address"
  );
  filteredBody.photoURL = fileData?.path;
  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    result: user.length,
    data: user,
  });
});
