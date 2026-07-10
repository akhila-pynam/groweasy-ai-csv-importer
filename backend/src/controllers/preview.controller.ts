import { Request, Response } from "express";
import { parseCSV } from "../services/csv.service";

export const previewCSV = (
  req: Request,
  res: Response
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No CSV uploaded",
      });
    }

    // Parse CSV directly from memory
    const parsed = parseCSV(req.file.buffer);

    return res.json({
      success: true,
      totalRows: parsed.rows.length,
      columns: parsed.columns,
      preview: parsed.rows.slice(0, 5),
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Preview Failed",
    });
  }
};
