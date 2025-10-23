
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import todoRoutes from "./Routes/todoRoutes.js";
import "./db.js"; // Ensure DB connection is established
const app = express();

// Middleware
app.use(cors({
   origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(bodyParser.json());

// Routes
app.use("/api/todos", todoRoutes);

// Start server

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);