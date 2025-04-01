const express = require("express");
const app = express();
const userRoute = require("./routes/User");
const profileRoute = require("./routes/Profile");
const paymentRoute = require("./routes/Payment");
const courseRoute = require("./routes/Course");
const contactRoute = require("./routes/Contact");

require("dotenv").config();

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

const PORT = process.env.PORT || 4000;

// CONNECTING TO DB
database.connect();

// middleware
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
const allowedOrigins = [
  "http://localhost:3000", // For local testing
  "https://studynotion-gvy4thr6b-vibhawaris-projects.vercel.app", // Your Vercel frontend URL
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// connecting to cloudinary
cloudinaryConnect();

// routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/profile", profileRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/reach", contactRoute);

// default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

// activate server
app.listen(PORT, () => {
  console.log(`app is running on the port ${PORT}`);
});
