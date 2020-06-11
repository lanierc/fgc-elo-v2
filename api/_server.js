"use strict";

// Imports and defs
const express = require("express");
const router = express();
const mongoose = require("mongoose");
const http = require("http");
const { PORT, MONGODB_URI } = require("./_utils/constants");

// Middleware
const middleWare = require("./_middleware");
const { applyMiddleware } = require("./_utils");

applyMiddleware(middleWare, router);

// Routes
const { router: userRouter } = require("./_routes/users/userRoutes");

router.use("/api/users", userRouter);

router.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    const errors = [{ message: "unauthorized" }];
    res.status(401).json({ errors });
  }
});

module.exports = router;

const server = http.createServer(router);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
