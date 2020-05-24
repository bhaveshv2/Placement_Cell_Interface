//include express
const express = require("express");
const router = express.Router();
const passport = require('passport');

const homeController = require("../controllers/home_controller");
router.get("/", homeController.home);

//redirect ther URLs to their respective routes
router.use('/users', require('./users'));

router.use('/students',passport.checkAuthentication,require('./students'));

module.exports=router;