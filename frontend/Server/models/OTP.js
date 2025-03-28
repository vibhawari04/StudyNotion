const mongoose = require("mongoose");
const mailsender = require("../utils/mailSender");
const otpTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
});

// pre middleware
// Define a function to send emails
async function sendverificationEmail(email, otp) {
  try {
    const mailResponse = await mailsender(
      email,
      "Verification Email For studynotion",
      otpTemplate(otp)
    );

    console.log("email response ->  ", mailResponse.response);
  } catch (error) {
    console.log("error occuredd while sending mail", error);
    throw error;
  }
}

// Define a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
  console.log("New document saved to database");

  // Only send an email when a new document is created
  if (this.isNew) {
    await sendverificationEmail(this.email, this.otp);
  }
  console.log("yaha tk sb badiya 3");
  next();
});

module.exports = mongoose.model("OTP", OTPSchema);
