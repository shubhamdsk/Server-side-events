import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import errorRoutes from "./routes/errorRoutes.js";
import sseRoutes from "./routes/sseRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect to DB
connectDB();

// routes
app.use("/", sseRoutes); 
app.use("/api/errors", errorRoutes);

// start server
app.listen(3000, () => console.log("Server running on port 3000"));
