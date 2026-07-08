export interface CSVRecord {
  [key: string]: string;
}

export interface UploadResponse {
  success: boolean;
  totalRows: number;
  preview: CSVRecord[];
  columns: string[];
}