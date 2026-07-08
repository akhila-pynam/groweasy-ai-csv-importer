import { Request, Response } from "express";
import { parseCSV } from "../services/csv.service";

export const uploadCSV = (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "CSV file is required",
      });
    }

    const data = parseCSV(req.file.path);

    return res.status(200).json({
      success: true,
      totalRows: data.length,
      preview: data.slice(0, 10), // Show only first 10 rows
      columns: Object.keys(data[0] || {}),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to parse CSV",
    });
  }
};