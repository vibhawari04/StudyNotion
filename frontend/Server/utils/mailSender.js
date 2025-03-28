const nodemailer = require("nodemailer");

require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    console.log("sender me hu ", email, title, body);
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    console.log("trasnporter ", transporter);
    let info = await transporter.sendMail({
      from: "StudyNotion",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log("info hu me*********************** ", info);
    return info;
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

module.exports = mailSender;
