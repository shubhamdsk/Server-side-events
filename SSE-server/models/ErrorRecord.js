import mongoose from "mongoose";

const ErrorSchema = new mongoose.Schema({
  message: String,
  solution: String,
  status: {
    type: String,
    enum: ["resolved", "pending", "failed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("ErrorRecord", ErrorSchema);
