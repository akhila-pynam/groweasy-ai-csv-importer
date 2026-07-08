import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import uploadRoutes from "./routes/upload.routes";
import healthRoutes from "./routes/health.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/health", healthRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GrowEasy AI CSV Importer Backend Running 🚀",
  });
});

export default app;