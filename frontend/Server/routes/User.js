const express = require("express");
const router = express.Router();

// import the required controller and middleware functions
const {
  login,
  signup,
  sendOTP,
  changePassword,
} = require("../controllers/Auth");

// import for reset password
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

const { UpdateCart } = require("../controllers/UpdateCart");
// import auth middlewrae
const { auth, isStudent } = require("../middleware/auth");

// routes for login and signup and authentication

// 1. route for user login
router.post("/login", login);
// 2. route for signup
router.post("/signup", signup);
// 3. route for signup
router.post("/sendotp", sendOTP);
// 4. route fir changing password
router.post("/changePassword", auth, changePassword);

//                     reset password

// route for genetating a reset password token
router.post("/reset-password-token", resetPasswordToken);
// route for reseting user password after verification
router.post("/reset-password", resetPassword);
// Export the router for use in the main application

router.post("/updateCart", auth, isStudent, UpdateCart);

module.exports = router;
