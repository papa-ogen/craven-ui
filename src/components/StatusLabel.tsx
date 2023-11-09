import { styled } from "react-tailwind-variants";

const StatusLabel = styled("div", {
  base: "px-2 py-1 inline-block rounded-sm text-xs flex items-center",
  variants: {
    type: {
      "error-outline": "shadow-red-10 shadow-[0px_0px_0px_1px] bg-red-2",
      "info-outline": "shadow-blue-10 shadow-[0px_0px_0px_1px] bg-blue-2",
      "success-outline": "shadow-grass-10 shadow-[0px_0px_0px_1px] bg-grass-3",
      "warning-outline":
        "shadow-orange-400 shadow-[0px_0px_0px_1px] bg-orange-2",
      "error-filled": "from-red-9 to-red-8 bg-gradient-to-b",
      "info-filled": "from-blue-600 to-blue-700 bg-gradient-to-b",
      "success-filled": "from-green-500 to-green-800 bg-gradient-to-b",
      "warning-filled": "from-orange-400 to-yellow-700 bg-gradient-to-b",
    },
  },
  defaultVariants: {
    type: "info-outline",
  },
});

export default StatusLabel;
