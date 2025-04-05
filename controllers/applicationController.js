const Application = require("../models/Application");

// Apply for a job
exports.applyForJob = async (req, res) => {
  const { jobId, resumeUrl } = req.body;
  const userId = req.user.userId;

  try {
    const newApplication = new Application({
      jobId,
      userId,
      resumeUrl,
      status: "Applied",
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all applications for an employer
exports.getApplications = async (req, res) => {
  const employerId = req.user.userId;

  try {
    const applications = await Application.find({ employerId });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
