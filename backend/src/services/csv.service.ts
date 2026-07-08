import fs from "fs";
import Papa from "papaparse";

export const parseCSV = (filePath: string) => {
  const csv = fs.readFileSync(filePath, "utf-8");

  const result = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });

  return result.data;
};