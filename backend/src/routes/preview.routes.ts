import { Router } from "express";
import upload from "../middleware/upload.middleware";
import { previewCSV } from "../controllers/preview.controller";

const router = Router();

router.post("/", upload.single("file"), previewCSV);

export default router;