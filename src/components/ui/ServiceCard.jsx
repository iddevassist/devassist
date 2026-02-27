export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}