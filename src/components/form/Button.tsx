export type ButtonVariantType = "error" | "success" | "warning" | "info";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariantType;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  name?: string | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}

const getVariantClasses = (variant: ButtonVariantType) => {
  switch (variant) {
    case "error":
      return "border-red-10 text-red-10 bg-red-2";
    case "warning":
      return "border-yellow-10 text-yellow-10 bg-yellow-2";
    case "info":
      return "border-blue-10 text-blue-10 bg-blue-2";
    case "success":
    default:
      return "border-grass-10 text-grass-10 bg-grass-2";
  }
};

const Button = ({
  children,
  variant = "success",
  type = "button",
  disabled,
  prefix,
  suffix,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`border rounded-sm px-2 opacity-75 hover:opacity-100 py-1 disabled:bg-gray-4 disabled:border-gray-9 disabled:placeholder:text-gray-8 disabled:hover:opacity-80 ${
        !disabled && getVariantClasses(variant)
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="flex space-x-2">
        {prefix && <span>{prefix}</span>}
        {prefix || suffix ? <span>{children}</span> : children}
        {suffix && <span>{suffix}</span>}
      </div>
    </button>
  );
};

export default Button;
