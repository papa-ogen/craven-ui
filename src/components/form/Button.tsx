import { styled } from "react-tailwind-variants";

export const Button = styled("button", {
  base: "rounded text-white disabled:cursor-not-allowed",
  variants: {
    color: {
      brand:
        "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 disabled:bg-orange-200 disabled:text-orange-300",
      accent:
        "text-orange-500 border-orange-500 border-[1px] hover:opacity-70 active:text-orange-100 active:border-orange-200 disabled:text-orange-900 disabled:border-orange-900 disabled:hover:bg-transparent",
      gradient:
        "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 active:from-orange-600 active:to-orange-800 disabled:from-orange-200 disabled:to-orange-100 disabled:text-orange-300",
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
