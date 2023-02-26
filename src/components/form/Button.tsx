export type ButtonVariantType = "error" | "success" | "warning" | "info";

const getVariantClasses = (variant: ButtonVariantType) => {
  switch (variant) {
    case "error":
      return "bg-red-10";
    case "warning":
      return "bg-yellow-10 text-slate-1";
    case "info":
      return "bg-blue-10";
    case "success":
    default:
      return "bg-grass-10";
  }
};

const Button = ({
  children,
  variant = "success",
}: {
  children: string;
  variant?: ButtonVariantType;
}) => {
  return (
    <button
      className={`rounded-sm max-w-xs w-36 hover:opacity-75 ${getVariantClasses(
        variant
      )}`}
    >
      {children}
    </button>
  );
};

export default Button;
