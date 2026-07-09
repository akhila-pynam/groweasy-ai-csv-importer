import dotenv from "dotenv";

const result = dotenv.config();

console.log(result);

console.log("PORT =", process.env.PORT);
console.log("GEMINI =", process.env.GEMINI_API_KEY);

import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});