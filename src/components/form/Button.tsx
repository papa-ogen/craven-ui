import { styled } from "react-tailwind-variants";

export const Button = styled("button", {
  base: "rounded text-white disabled:cursor-not-allowed",
  variants: {
    color: {
      brand:
        "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 disabled:bg-orange-200 disabled:text-orange-300",
      outlined:
        "text-orange-500 border-orange-500 border-[1px] hover:opacity-70 active:text-orange-100 active:border-orange-200 disabled:text-orange-900 disabled:border-orange-900 disabled:hover:bg-transparent",
      gradient:
        "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 active:from-orange-600 active:to-orange-800 disabled:from-orange-200 disabled:to-orange-100 disabled:text-orange-300",
      accent:
        "bg-blue-600 text-white hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-50 disabled:text-blue-300",
      "accent-outlined":
        "text-blue-500 border-blue-500 border-[1px] hover:opacity-70 active:text-blue-100 active:border-blue-200 disabled:text-blue-900 disabled:border-blue-900 disabled:hover:bg-transparent",
      "accent-gradient":
        "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 active:from-blue-600 active:to-blue-800 disabled:from-blue-100 disabled:to-blue-50 disabled:text-blue-400",
    },
    size: {
      small: "px-5 py-3 text-xs",
      large: "px-6 py-4 text-base",
    },
  },
  defaultVariants: {
    color: "gradient",
    size: "small",
  },
});

export default Button;
