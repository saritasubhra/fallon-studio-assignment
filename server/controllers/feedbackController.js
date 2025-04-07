const Feedback = require("../models/feedbackModel");

async function createFeedback(req, res, next) {
  try {
    const { fullname, email, message } = req.body;

    const feedback = await Feedback.create({ fullname, email, message });

    res.status(201).json({
      status: "success",
      message: "Feedback submitted successfully",
      data: feedback,
    });
  } catch (error) {
    next(error);
  }
}

async function getAllFeedbacks(req, res, next) {
  try {
    const feedbacks = await Feedback.find();

    if (!feedbacks) {
      throw new Error("No feedbacks found.");
    }

    res.status(200).json({
      status: "success",
      data: feedbacks,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { createFeedback, getAllFeedbacks };
