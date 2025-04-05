const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

// Create job
router.post("/create", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

// Search jobs
router.get("/search", async (req, res) => {
  const { title, location, industry, skills } = req.query;
  const filter = {};

  if (title) filter.title = new RegExp(title, "i");
  if (location) filter.location = new RegExp(location, "i");
  if (industry) filter.industry = industry;
  if (skills) filter.skills = { $in: skills.split(",") };

  const jobs = await Job.find(filter);
  res.json(jobs);
});

module.exports = router;
