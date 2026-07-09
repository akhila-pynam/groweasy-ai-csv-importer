import { Request, Response } from "express";

import { parseCSV } from "../services/csv.service";
import { mapColumns } from "../services/ai.service";
import { transformRows } from "../services/transform.service";
import { validateRows } from "../services/validation.service";

export const uploadCSV = async (
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

    // Step 1: Parse CSV
    const parsed = parseCSV(req.file.path);

    // Step 2: AI Mapping
    const mapping = await mapColumns(parsed.columns);

    // Step 3: Transform rows
    const crmData = transformRows(parsed.rows, mapping);

    // Step 4: Validate rows
    const { validRows, skippedRows } = validateRows(crmData);

    return res.json({
      success: true,

      totalRows: parsed.rows.length,

      imported: validRows.length,

      skipped: skippedRows.length,

      columns: parsed.columns,

      preview: parsed.rows.slice(0, 5),

      mapping,

      crmData: validRows,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};