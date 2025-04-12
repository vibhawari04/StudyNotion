// const express = require("express");
// const app = express();
// const userRoute = require("./routes/User");
// const profileRoute = require("./routes/Profile");
// const paymentRoute = require("./routes/Payment");
// const courseRoute = require("./routes/Course");
// const contactRoute = require("./routes/Contact");

// require("dotenv").config();

// const database = require("./config/database");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const { cloudinaryConnect } = require("./config/cloudinary");
// const fileUpload = require("express-fileupload");

// const PORT = process.env.PORT || 4000;

// // CONNECTING TO DB
// database.connect();

// // middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
// // const allowedOrigins = [
// //   "http://localhost:3000", // For local testing
// //   "https://studynotion-exmjma5d6-vibhawaris-projects.vercel.app",
// //   // Your Vercel frontend URL
// // ];

// // app.use(
// //   cors({
// //     origin: allowedOrigins,
// //     credentials: true,
// //   })
// // );
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp",
//   })
// );

// // connecting to cloudinary
// cloudinaryConnect();

// // routes
// app.use("/api/v1/auth", userRoute);
// app.use("/api/v1/profile", profileRoute);
// app.use("/api/v1/course", courseRoute);
// app.use("/api/v1/payment", paymentRoute);
// app.use("/api/v1/reach", contactRoute);

// // default route
// app.get("/", (req, res) => {
//   return res.json({
//     success: true,
//     message: "Your server is up and running...",
//   });
// });

// // activate server
// app.listen(PORT, () => {
//   console.log(`app is running on the port ${PORT}`);
// });

//khushi change

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

// const PORT = process.env.PORT || 4000;
const PORT = process.env.PORT;

// CONNECTING TO DB
database.connect();

// Middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:3000", // Local Testing
  "https://studynotion-jtjmtr8ho-vibhawaris-projects.vercel.app/", // Vercel Frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// Handle Preflight (OPTIONS) Requests
app.options("*", cors());

// File Upload Config
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

//google code
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,  Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});
// Connect to Cloudinary
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/profile", profileRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/reach", contactRoute);

// Default Route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

// Activate Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
