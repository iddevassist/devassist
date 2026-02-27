import { Code } from "lucide-react";

export default function PortfolioCard({ title, category, description, tech }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white">
        <Code className="w-12 h-12 opacity-50" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      </div>
      <div className="p-6">
        <div className="text-sm text-primary font-semibold mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-light text-xs rounded-full text-gray-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}