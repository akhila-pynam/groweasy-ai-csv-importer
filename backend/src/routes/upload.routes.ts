import { Router } from "express";
import { upload } from "../middleware/upload.middleware";
import { uploadCSV } from "../controllers/upload.controller";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Upload API is working",
  });
});

router.post("/", upload.single("file"), uploadCSV);

export default router;