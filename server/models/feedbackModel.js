const mongoose = require("mongoose");
const validator = require("validator");

const feedbackSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "fullname is required"],
      minlength: [5, "fullname must be at least 3 characters long."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email."],
    },
    message: {
      type: String,
      required: [true, "message is required"],
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
