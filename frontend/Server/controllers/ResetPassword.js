const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
// resetPassword token link
exports.resetPasswordToken = async (req, res) => {
  try {
    //get email form req body
    const email = req.body.email;
    //check user for this email , email verifiaction (is exist or not)
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        success: false,
        Message: `your email: ${email} is not registered with us`,
      });
    }
    //  generate token
    const token = crypto.randomBytes(20).toString("hex");
    // update user by adding token and experiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resePasswordExpires: Date.now() + 3600000,
      },
      { new: true }
    );
    console.log("Details ", updatedDetails);
    // create url
    const url = `http://localhost:3000/update-password/${token}`;

    // sent    mail containeing url
    await mailSender(
      email,
      "Password Reset Link",
      `Password Reset Link: ${url}`
    );
    // return response
    return res.json({
      success: true,
      message: "email sent successfully,please check email and chnage password",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "something went wrong whhile reset password",
    });
  }
};

// resetpass
exports.resetPassword = async (req, res) => {
  try {
    //data fetch
    const { password, confirmPassword, token } = req.body;
    //validation
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "password  and confirm pass not matching",
      });
    }

    // get userdetails  from db using token
    const userDetails = await User.findOne({ token: token });
    // if no entery - invalid token
    if (!userDetails) {
      return res.json({
        sucess: false,
        message: "token is invalid",
      });
    }

    console.log(
      userDetails.resetPasswordExpires,
      " ",
      userDetails,
      " <- time dekho idhar"
    );

    if (userDetails.resetPasswordExpires > Date.now()) {
      return res.status(403).json({
        success: false,
        message: `Token is Expired, Please Regenerate Your Token`,
      });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // password udate
    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );
    // return response
    return res.status(200).json({
      success: true,
      message: "reset password successful",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "something went wrong whhile sending reset password mail",
    });
  }
};
