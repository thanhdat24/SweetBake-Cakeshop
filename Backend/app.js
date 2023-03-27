const path = require("path");
const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const cors = require("cors");

const app = express();

// 2)
const categoryRouters = require("./routers/categoryRouters");
const cakeRouters = require("./routers/cakeRouters");
const cakeImagesRouters = require("./routers/cakeImagesRouters");

// Serving static files
app.use(express.static(path.join(__dirname, "./public")));

// 1) Global Middleware
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) Router
app.use("/api/v1/categories", categoryRouters);
app.use("/api/v1/cakes", cakeRouters);
app.use("/api/v1/cakeImages", cakeImagesRouters);



// trả về đường dẫn not found
app.all("*", (req, res, next) => {
  next(new AppError(`Can'n find ${req.originalUrl} on this sever!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
