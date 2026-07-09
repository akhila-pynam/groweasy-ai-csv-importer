export interface ValidationResult {
  validRows: Record<string, string>[];
  skippedRows: Record<string, string>[];
}

export const validateRows = (
  rows: Record<string, string>[]
): ValidationResult => {
  const validRows: Record<string, string>[] = [];
  const skippedRows: Record<string, string>[] = [];

  rows.forEach((row) => {
    const email = (row["email"] || "").trim();
    const mobile = (row["mobile_without_country_code"] || "").trim();

    if (!email && !mobile) {
      skippedRows.push(row);
    } else {
      validRows.push(row);
    }
  });

  return {
    validRows,
    skippedRows,
  };
};