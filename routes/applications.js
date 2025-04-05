const express = require("express");
const Application = require("../models/Application");
const router = express.Router();

// Apply to a job
router.post("/apply", async (req, res) => {
  const { jobId, applicantId, resumeUrl } = req.body;
  const application = new Application({
    job: jobId,
    applicant: applicantId,
    resumeUrl,
  });
  await application.save();
  res.status(201).json(application);
});

// Get applications by employer (later you can secure this route)
router.get("/employer/:id", async (req, res) => {
  const applications = await Application.find()
    .populate("job")
    .populate("applicant");
  res.json(applications);
});

module.exports = router;
