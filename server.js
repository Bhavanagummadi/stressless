import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import morgan from "morgan";
import jobRouter from "./router/jobRouter.js";
import authRouter from "./router/authRouter.js";
import mongoose from "mongoose";

const app = express();

// Enable CORS
app.use(cors());

// Enable request logging in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ data: req.body });
});

// Use routers
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something went wrong" });
});

const port = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server started Listening on port ${port}...`);
  });
} catch (err) {
  console.log("Error connecting to MongoDB", err);
  process.exit(1);
}
