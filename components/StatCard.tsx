type StatCardProps = {
  label: string;
  value: string | number;
  hint?: string;
  color?: "blue" | "green" | "red";
};

const accentMap = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  red: "bg-red-500",
};

const textMap = {
  blue: "text-blue-600",
  green: "text-green-600",
  red: "text-red-600",
};

export default function StatCard({
  label,
  value,
  hint,
  color = "blue",
}: StatCardProps) {
  return (
    <div
      className="relative rounded-2xl border bg-gray-50 p-5
                 hover:bg-white hover:shadow-sm
                 transition"
    >
      {/* Accent bar */}
      <span
        className={`absolute top-0 left-0 h-full w-1 rounded-l-2xl ${accentMap[color]}`}
      />

      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p className={`mt-2 text-2xl font-mono font-semibold ${textMap[color]}`}>
        {value}
      </p>

      {hint && <p className="mt-2 text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
