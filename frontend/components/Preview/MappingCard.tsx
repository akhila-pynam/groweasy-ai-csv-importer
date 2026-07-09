interface MappingCardProps {
  mapping: Record<string, string>;
}

export default function MappingCard({
  mapping,
}: MappingCardProps) {
  return (
    <div className="mt-8 bg-slate-900 rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        AI Column Mapping
      </h2>

      <div className="space-y-3">

        {Object.entries(mapping).map(([crmField, csvField]) => (

          <div
            key={crmField}
            className="flex justify-between bg-slate-800 p-4 rounded-lg"
          >

            <span className="font-semibold text-green-400">
              {crmField}
            </span>

            <span>
              {csvField}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}