const express = require("express");
const {
  createFeedback,
  getAllFeedbacks,
} = require("../controllers/feedbackController");

const router = express.Router();

router.route("/").get(getAllFeedbacks).post(createFeedback);

module.exports = router;
