const express = require("express");
const mongoose = require("mongoose");
const route = require("./src/router/route");
const dotenv = require('dotenv');
const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();

// Use rate limiting middleware to limit the rate of incoming requests
const limiter = rateLimit({
  windowMs: 2000, // 10 seconds
  max: 5, // Limit to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

app.use(express.json());
var cors = require("cors");
app.use(cors());

mongoose
  .connect(
    process.env.cluster,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));
app.use("/", route);

app.listen(process.env.PORT || 3001, function () {
  console.log("Express app running on port " + (process.env.PORT || 3001));
});
