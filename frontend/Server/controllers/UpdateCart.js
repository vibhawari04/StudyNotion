const User = require("../models/User");

exports.UpdateCart = async () => {
  try {
    const { cart } = req.body;
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { cart: cart },
      { new: true }
    );
    return res
      .status(200)
      .json({
        success: true,
        message: "cart updated successfully",
        updatedUserDetails,
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    });
  }
};
