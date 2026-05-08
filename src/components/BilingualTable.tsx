"use client";
import { useLang } from "@/context/LanguageContext";

interface Row {
  field: string;
  fieldZh: string;
  value: string;
  valueZh: string;
}

interface Props {
  rows: Row[];
  accent?: string;
}

export default function BilingualTable({ rows, accent = "#be185d" }: Props) {
  const { lang } = useLang();

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ backgroundColor: accent + "18" }}>
            <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">
              {lang === "zh" ? "字段" : "Field"}
            </th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700">
              {lang === "zh" ? "内容" : "Details"}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <>
              {/* EN row */}
              <tr key={`en-${i}`} className="border-t border-gray-100 bg-white">
                <td className="px-4 py-2.5 font-medium text-gray-700 align-top">{row.field}</td>
                <td className="px-4 py-2.5 text-gray-600">{row.value}</td>
              </tr>
              {/* ZH row */}
              <tr key={`zh-${i}`} className="bg-blue-50 border-t border-blue-100">
                <td className="px-4 py-2 text-xs text-gray-400 align-top">{row.fieldZh}</td>
                <td className="px-4 py-2 text-xs text-gray-500">{row.valueZh}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
