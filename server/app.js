const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./controllers/errorController");
const feedbackRouter = require("./routes/feedbackRoutes");

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/feedbacks", feedbackRouter);

app.all("*", (req, res, next) => {
  next(new Error(`This route ${req.originalUrl} doesn't exist.`));
});

app.use(globalErrorHandler);

module.exports = app;
