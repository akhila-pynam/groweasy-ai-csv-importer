import { GoogleGenerativeAI } from "@google/generative-ai";
import { mappingPrompt } from "../prompts/mapping.prompt";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const mapColumns = async (columns: string[]) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = mappingPrompt(columns);

  const result = await model.generateContent(prompt);

  const text = result.response
    .text()
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
};