export type ButtonVariantType = "error" | "success" | "warning" | "info";

export interface ButtonProps2 extends React.HTMLProps<HTMLButtonElement> {}

interface ButtonProps {
  children: string;
  variant?: ButtonVariantType;
  name?: string | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}

const getVariantClasses = (variant: ButtonVariantType) => {
  switch (variant) {
    case "error":
      return "border-red-10 text-red-10";
    case "warning":
      return "border-yellow-10 text-yellow-10";
    case "info":
      return "border-blue-10 text-blue-10";
    case "success":
    default:
      return "border-grass-10 text-grass-10";
  }
};

const Button = ({
  children,
  variant = "success",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`border rounded-sm max-w-xs w-36 opacity-75 hover:opacity-100 py-1 disabled:bg-gray-4 disabled:border-gray-9 disabled:placeholder:text-gray-8 disabled:hover:opacity-80 ${
        !disabled && getVariantClasses(variant)
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
