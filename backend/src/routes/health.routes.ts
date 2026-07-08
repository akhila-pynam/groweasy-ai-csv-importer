import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Backend is healthy 🚀",
  });
});

export default router;