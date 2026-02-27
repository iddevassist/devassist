export default function SectionTitle({ subtitle, title, className = "" }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && (
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-dark">{title}</h2>
    </div>
  );
}