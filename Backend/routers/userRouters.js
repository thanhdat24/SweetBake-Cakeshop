const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const uploadCloud = require("../middlewares/uploader");

const router = express.Router();

router.put(
  "/updateMe",
  authController.protect,
  uploadCloud.single("photoURL"),
  userController.updateMe
);

router.post("/register", authController.signup);
router.post("/login", authController.login);

router.route("/").get(userController.getAllUsers);
router
  .route("/:id")
  .delete(userController.deleteUser)
  .get(userController.getDetailUser)
  .put(userController.updateUser);

module.exports = router;
