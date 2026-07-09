interface CRMPreviewProps {
  data: Record<string, string>[];
}

export default function CRMPreview({
  data,
}: CRMPreviewProps) {
  if (!data.length) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="mt-8 bg-slate-900 rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        🚀 CRM Ready Data
      </h2>

      <div className="overflow-x-auto">

        <table className="min-w-full border border-slate-700">

          <thead className="bg-slate-800">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="border border-slate-700 px-4 py-2 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>

            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td
                    key={header}
                    className="border border-slate-700 px-4 py-2"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}