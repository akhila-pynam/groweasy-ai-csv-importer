"use client";

import { useState } from "react";

import UploadBox from "@/components/Upload/UploadBox";
import MappingCard from "@/components/Preview/MappingCard";
import CRMPreview from "@/components/Result/CRMPreview";

import { previewCSV, uploadCSV } from "@/services/api";

interface PreviewData {
  success: boolean;
  totalRows: number;
  imported: number;
  skipped: number;
  columns: string[];
  preview: Record<string, string>[];
  mapping?: Record<string, string>;
  crmData?: Record<string, string>[];
}

export default function Home() {
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Preview CSV
  const handleFile = async (file: File) => {
    try {
      setLoading(true);

      setSelectedFile(file);

      const data = await previewCSV(file);

      setPreview(data);
    } catch (error) {
      console.error(error);
      alert("Preview Failed");
    } finally {
      setLoading(false);
    }
  };

  // Confirm Import
  const handleImport = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);

      const data = await uploadCSV(selectedFile);

      setPreview(data);
    } catch (error) {
      console.error(error);
      alert("Import Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Hero */}
        <div className="text-center mb-12">

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            GrowEasy AI CSV Importer
          </h1>

          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Upload any CSV and let AI intelligently map it into the GrowEasy CRM format.
          </p>

        </div>

        {/* Upload */}
        <UploadBox onFileSelect={handleFile} />

        {/* Loading */}
        {loading && (
          <div className="mt-10 flex items-center justify-center gap-3">

            <div className="h-5 w-5 rounded-full border-2 border-green-500 border-t-transparent animate-spin"></div>

            <p className="text-green-400 font-semibold">
              Processing CSV...
            </p>

          </div>
        )}

        {preview && (
          <>
            {/* Preview Card */}
            <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                CSV Preview
              </h2>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center shadow-md">
                  <p className="text-slate-400 text-sm uppercase tracking-wide">
                    Total Records
                  </p>

                  <p className="mt-2 text-4xl font-bold">
                    {preview.totalRows}
                  </p>
                </div>

                <div className="bg-green-900/30 border border-green-700 rounded-xl p-5 text-center shadow-md">
                  <p className="text-green-300 text-sm uppercase tracking-wide">
                    Imported
                  </p>

                  <p className="mt-2 text-4xl font-bold text-green-400">
                    {preview.imported}
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-700 rounded-xl p-5 text-center shadow-md">
                  <p className="text-red-300 text-sm uppercase tracking-wide">
                    Skipped
                  </p>

                  <p className="mt-2 text-4xl font-bold text-red-400">
                    {preview.skipped}
                  </p>
                </div>

              </div>

              {/* CSV Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-700">

                <table className="min-w-full">

                  <thead className="bg-slate-800 sticky top-0">

                    <tr>
                      {preview.columns.map((column) => (
                        <th
                          key={column}
                          className="border border-slate-700 px-4 py-3 text-left font-semibold whitespace-nowrap"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>

                  </thead>

                  <tbody>

                    {preview.preview.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-slate-800 transition-colors"
                      >
                        {preview.columns.map((column) => (
                          <td
                            key={column}
                            className="border border-slate-700 px-4 py-3 whitespace-nowrap"
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

            {/* Confirm Import Button */}
            {!preview.mapping && (
              <div className="mt-10 text-center">

                <button
                  onClick={handleImport}
                  className="bg-green-600 hover:bg-green-700 transition-all duration-200 px-10 py-3 rounded-xl font-semibold shadow-lg"
                >
                  Confirm Import
                </button>

              </div>
            )}

            {/* AI Mapping */}
            {preview.mapping && (
              <div className="mt-12">
                <MappingCard mapping={preview.mapping} />
              </div>
            )}

            {/* CRM Ready Data */}
            {preview.crmData && (
              <div className="mt-12">
                <CRMPreview data={preview.crmData} />
              </div>
            )}
          </>
        )}

      </div>
    </main>
  );
}