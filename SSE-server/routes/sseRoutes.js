import express from "express";
import ErrorRecord from "../models/ErrorRecord.js";

const router = express.Router();

router.get("/events", async (req, res) => {
   res.setHeader("Content-Type", "text/event-stream");
   res.setHeader("Cache-Control", "no-cache");
   res.setHeader("Connection", "keep-alive");

   // Send an initial event
   const sendCounts = async () => {
      const resolved = await ErrorRecord.countDocuments({ status: "resolved" });
      const pending = await ErrorRecord.countDocuments({ status: "pending" });
      const failed = await ErrorRecord.countDocuments({ status: "failed" });

      const payload = { resolved, pending, failed };
      res.write(`data: ${JSON.stringify(payload)}\n\n`);
   };

   // Send immediately when connection opens
   sendCounts();

   // Send updates every 3 seconds (poll to trigger SSE push)
   const interval = setInterval(sendCounts, 3000);

   req.on("close", () => {
      clearInterval(interval);
   });
});

export default router;
