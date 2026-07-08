"use client";

import { useState } from "react";
import UploadBox from "@/components/Upload/UploadBox";
import { uploadCSV } from "@/services/api";

interface PreviewData {
  success: boolean;
  totalRows: number;
  columns: string[];
  preview: Record<string, string>[];
}

export default function Home() {
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (file: File) => {
    try {
      setLoading(true);

      const data = await uploadCSV(file);

      setPreview(data);
    } catch (error) {
      console.error("Upload Failed:", error);
      alert("Failed to upload CSV.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 py-10">

        <h1 className="text-5xl font-bold text-center">
          GrowEasy AI CSV Importer
        </h1>

        <p className="text-center mt-5 text-slate-400">
          Upload any CSV and let AI automatically convert it into GrowEasy CRM
          format.
        </p>

        <div className="mt-12">
          <UploadBox onFileSelect={handleFile} />
        </div>

        {loading && (
          <div className="mt-8 text-center">
            <p className="text-green-400 font-semibold">
              Uploading CSV...
            </p>
          </div>
        )}

        {preview && (
          <div className="mt-10 bg-slate-900 rounded-xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              CSV Preview
            </h2>

            <p className="mb-4">
              <strong>Total Rows:</strong> {preview.totalRows}
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-700">

                <thead className="bg-slate-800">

                  <tr>
                    {preview.columns.map((column) => (
                      <th
                        key={column}
                        className="border border-slate-700 px-4 py-2 text-left"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>

                </thead>

                <tbody>

                  {preview.preview.map((row, index) => (
                    <tr key={index}>

                      {preview.columns.map((column) => (
                        <td
                          key={column}
                          className="border border-slate-700 px-4 py-2"
                        >
                          {row[column]}
                        </td>
                      ))}

                    </tr>
                  ))}

                </tbody>

              </table>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}