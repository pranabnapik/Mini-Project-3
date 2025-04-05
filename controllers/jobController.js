const Job = require("../models/Job");

// Create a new job listing
exports.createJob = async (req, res) => {
  const { title, description, requirements, location } = req.body;
  const postedBy = req.user.userId;

  try {
    const newJob = new Job({
      title,
      description,
      requirements,
      location,
      postedBy,
    });

    await newJob.save();
    res.status(201).json({ message: "Job created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Search jobs by title, location, or skills
exports.searchJobs = async (req, res) => {
  const { title, location, skills } = req.query;

  try {
    const query = {};

    if (title) query.title = { $regex: title, $options: "i" };
    if (location) query.location = { $regex: location, $options: "i" };
    if (skills) query.requirements = { $regex: skills, $options: "i" };

    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
