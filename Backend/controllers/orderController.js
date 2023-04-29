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
  const orders = await Order.find({ userId: req.user.id })
    .sort({ createdAt: -1 })
    .populate("orderDetail");

  // filterDoc.sort((a, b) => b.createdAt - a.createdAt);
  // thêm vào trường cakeImage trong model cakeImage
  for (let order of orders) {
    for (let cake of order.orderDetail) {
      const image = await CakeImages.findOne({ cakeId: cake.cakeId.id });
      if (image) {
        cake.cakeImage = image.url;
      }
    }
  }

  res.status(200).json({
    status: "success",
    length: orders.length,
    data: orders,
  });
});

exports.getDetailOrder = catchAsync(async (req, res, next) => {
  const orders = await Order.findById(req.params.id).populate("orderDetail");
  for (let cake of orders.orderDetail) {
    const image = await CakeImages.findOne({ cakeId: cake.cakeId.id });
    if (image) {
      cake.cakeImage = image.url;
    }
  }

  res.status(200).json({
    status: "success",
    length: orders.length,
    data: orders,
  });
});

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

exports.updateOrder = factory.updateOne(Order);
