const express = require("express");
const mongoose = require("mongoose");
const route = require("./src/router/route");
const dotenv = require('dotenv');
const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();

// Use rate limiting middleware to limit the rate of incoming requests
const limiter = rateLimit({
  windowMs: 2000, // 2 seconds
  max: 5, // Limit to 5 requests per 2 seconds
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

app.use(express.json()); // This middleware will parse JSON data in the request body

const cors = require("cors");
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

// Middleware to handle headers for all routes
app.use((req, res, next) => {
  const acceptHeader = req.get('Accept'); // Access the 'Accept' header
  const refererHeader = req.get('Referer'); // Access the 'Referer' header

  // Handle headers as needed
  console.log('Accept Header:', acceptHeader);
  console.log('Referer Header:', refererHeader);

  // Continue processing the request
  next();
});

app.use("/", route);

app.listen(process.env.PORT || 3001, function () {
  console.log("Express app running on port " + (process.env.PORT || 3001));
});
