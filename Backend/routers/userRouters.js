const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.route("/").get(userController.getAllUsers);
router
  .route("/:id")
  .delete(userController.deleteUser)
  .get(userController.getDetailUser)
  .put(userController.updateUser);

module.exports = router;
