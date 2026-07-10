import Papa from "papaparse";

export interface ParsedCSV {
  columns: string[];
  rows: Record<string, string>[];
}

export const parseCSV = (buffer: Buffer): ParsedCSV => {
  const csv = buffer.toString("utf-8");

  const result = Papa.parse<Record<string, string>>(csv, {
    header: true,
    skipEmptyLines: true,
  });

  return {
    columns: result.meta.fields || [],
    rows: result.data,
  };
};
