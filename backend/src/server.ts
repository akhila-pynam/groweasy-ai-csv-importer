import dotenv from "dotenv";
dotenv.config();

import app from "./app";

if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is missing");
}

export default app;