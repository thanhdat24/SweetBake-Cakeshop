const Order = require("../models/orderModel");
const OrderDetail = require("../models/orderDetailModel");
const Cake = require("../models/cakeModel");
const CakeImages = require("../models/cakeImagesModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const _ = require("lodash");
const moment = require("moment");

exports.getAllOrder = factory.getAll(Order, { path: "orderDetail" });
exports.getMeOrder = catchAsync(async (req, res, next) => {
  let query = Order.find(req.query).populate("orderDetail");
  const doc = await query;
  let filterDoc = doc.filter((item) => item.idUser.id === req.user.id);

  filterDoc.sort((a, b) => b.createdAt - a.createdAt);

  res.status(200).json({
    status: "success",
    length: filterDoc.length,
    data: filterDoc,
  });
});
exports.getDetailOrder = factory.getOne(Order, { path: "orderDetail" });

const filterObj = (obj, ...allowedField) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedField.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.createOrder = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  console.log("req.user", req.user);
  try {
    req.body.userId = _id;
    const objOrder = filterObj(
      req.body,
      "address",
      "total",
      "paymentMethod",
      "userId",
      "status"
    );
    const order = await Order.create(objOrder);
    req.order = order;

    console.log("req.order", req.order);
    let arrayItems = [];

    let totalQuality = 0;

    if (order._id) {
      await req.body.cart.map(async (item, index) => {
        let cake = await Cake.findById(item.cakeId);
        if (cake) {
          totalQuality += item.quantity;
          cake.soldQuality += totalQuality;
          await cake.save();
          let itemProduct = {
            quantity: item.quantity,
            price: cake.price,
            total: item.quantity * cake.price,
            orderId: order._id,
            cakeId: cake._id,
            name: cake.name,
            cakeImage: item.cover,
          };
          arrayItems.push(itemProduct);
        } else {
          return next(new AppError("Không tồn tại sản phảm nào!", 404));
        }
        if (arrayItems.length === req.body.cart.length) {
          await OrderDetail.insertMany(arrayItems);
        }
      });

      res.status(201).json({
        status: "success",
        result: order.length,
        data: order,
      });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
