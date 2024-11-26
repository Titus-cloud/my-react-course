export default function Collection({ title, subtitle, bgColor, size, textColor }) {
  const containerClass = size === "large" ? "col-span-4 row-span-4" : "";
  return (
    <div
      className={`flex flex-col justify-between p-6 ${bgColor} ${containerClass} rounded-md`}
    >
      <div>
        <p className="text-sm uppercase font-medium text-gray-600">{subtitle}</p>
        <h2 className={`text-2xl font-semibold ${textColor} mb-4`}>{title}</h2>
      </div>
      <a
        href="#"
        className="text-sm font-semibold flex items-center gap-1 hover:underline"
      >
        Shop Now <span>→</span>
      </a>
    </div>
  );
}
