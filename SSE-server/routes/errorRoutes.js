import express from "express";
import ErrorRecord from "../models/ErrorRecord.js";

const router = express.Router();

// Add new error
router.post("/add", async (req, res) => {
  const error = new ErrorRecord(req.body);
  await error.save();
  res.json({ message: "Error stored" });
});

// Get counts (for your dashboard)
router.get("/counts", async (req, res) => {
  const resolved = await ErrorRecord.countDocuments({ status: "resolved" });
  const pending = await ErrorRecord.countDocuments({ status: "pending" });
  const failed = await ErrorRecord.countDocuments({ status: "failed" });

  res.json({ resolved, pending, failed });
});

// Get all errors
router.get("/list", async (req, res) => {
  const all = await ErrorRecord.find();
  res.json(all);
});

export default router;
