"use client";

import { useRef } from "react";

interface UploadBoxProps {
  onFileSelect: (file: File) => void;
}

export default function UploadBox({
  onFileSelect,
}: UploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-slate-700 rounded-2xl p-16 bg-slate-900 text-center">

      <h2 className="text-2xl font-semibold">
        📄 Drag & Drop CSV Here
      </h2>

      <p className="mt-3 text-slate-400">
        or
      </p>

      <button
        type="button"
        onClick={handleClick}
        className="mt-6 bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold transition"
      >
        Choose CSV File
      </button>

      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        hidden
        onChange={handleFileChange}
      />

      <p className="mt-4 text-sm text-slate-500">
        Supported format: .csv
      </p>

    </div>
  );
}