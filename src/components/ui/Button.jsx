    import Link from "next/link";

export default function Button({ children, href, variant = "primary", className = "", ...props }) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700 focus:ring-primary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}