const express = require("express");
const router = express.Router();

const{ register, login, forgetpassword, resetpassword,getdata, getuserdata, isAuthuser, dashboard, sendchallange }= require('../controllers/auth')
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/getdata").post(getdata)

router.route("/getuserdata").get(getuserdata)

router.route("/me").get(isAuthuser,dashboard)
router.route("/sendchal").post(sendchallange)

// router.route("/forgetpassword").post(forgetpassword);

// router.route("/resetpassword/:resetToken").post(resetpassword);

module.exports=router



