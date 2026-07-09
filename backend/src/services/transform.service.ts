export const transformRows = (
  rows: Record<string, string>[],
  mapping: Record<string, string>
) => {
  return rows.map((row) => {
    const transformed: Record<string, string> = {};

    // Normal Mapping
    Object.entries(mapping).forEach(([crmField, csvColumn]) => {
      transformed[crmField] = csvColumn
        ? (row[csvColumn] ?? "").toString().trim()
        : "";
    });

    // -----------------------------
    // Extra Email Handling
    // -----------------------------
    const emailColumns = Object.keys(row).filter((key) =>
      key.toLowerCase().includes("email")
    );

    if (emailColumns.length > 1) {
      const extraEmails = emailColumns
        .slice(1)
        .map((c) => row[c])
        .filter(Boolean);

      if (extraEmails.length > 0) {
        transformed.crm_note =
          (transformed.crm_note || "") +
          "\nExtra Emails: " +
          extraEmails.join(", ");
      }
    }

    // -----------------------------
    // Extra Phone Handling
    // -----------------------------
    const phoneColumns = Object.keys(row).filter((key) => {
      const k = key.toLowerCase();
      return (
        k.includes("phone") ||
        k.includes("mobile") ||
        k.includes("contact")
      );
    });

    if (phoneColumns.length > 1) {
      const extraPhones = phoneColumns
        .slice(1)
        .map((c) => row[c])
        .filter(Boolean);

      if (extraPhones.length > 0) {
        transformed.crm_note =
          (transformed.crm_note || "") +
          "\nExtra Phones: " +
          extraPhones.join(", ");
      }
    }

    transformed.crm_note = transformed.crm_note?.trim() || "";

    return transformed;
  });
};