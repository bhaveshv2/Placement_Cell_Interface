//include express
const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");
router.get("/", homeController.home);

//redirect other URLs to their respective routes
router.use("/users", require("./users"));

module.exports=router;