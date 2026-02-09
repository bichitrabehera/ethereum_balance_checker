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
  blue: "text-blue-400",
  green: "text-green-400",
  red: "text-red-400",
};

export default function StatCard({
  label,
  value,
  hint,
  color = "blue",
}: StatCardProps) {
  return (
    <div className="relative bg-black px-5 py-4">
      <p className="text-[11px] uppercase tracking-widest text-gray-500">
        {label}
      </p>

      <p className={`mt-1 text-2xl font-mono font-medium ${textMap[color]}`}>
        {value}
      </p>

      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
