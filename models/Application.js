const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  resumeUrl: { type: String, required: true },
  status: {
    type: String,
    enum: ["Applied", "Reviewed", "Rejected", "Accepted"],
    default: "Applied",
  },
});

module.exports = mongoose.model("Application", applicationSchema);
