import React from "react";
export type StatusLabelType = "error" | "success" | "warning" | "info";
export type StatusLabelTypeProps = {
  bg: string;
  border: string;
  text: string;
};
export type StatusLabelVariantType = "outline" | "filled" | "filled-border";

const getVariantCSS = (
  variant: StatusLabelVariantType,
  type: StatusLabelType
) => {
  switch (variant) {
    case "filled":
      switch (type) {
        case "error":
          return "from-red-9 to-red-8 bg-gradient-to-b";
        case "info":
          return "from-blue-10 to-blue-9 bg-gradient-to-b";
        case "success":
          return "from-grass-9 to-grass-8 bg-gradient-to-b";
        case "warning":
          return "from-yellow-10 to-yellow-9 bg-gradient-to-b text-yellow-6";
      }
      break;
    case "filled-border":
      switch (type) {
        case "error":
          return "from-red-9 to-red-8 bg-gradient-to-b shadow-red-6 shadow-[0px_0px_0px_1px]";
        case "info":
          return "from-blue-10 to-blue-9 bg-gradient-to-b shadow-blue-6 shadow-[0px_0px_0px_1px]";
        case "success":
          return "from-grass-9 to-grass-8 bg-gradient-to-b shadow-grass-6 shadow-[0px_0px_0px_1px]";
        case "warning":
          return "from-yellow-10 to-yellow-9 bg-gradient-to-b text-yellow-6 shadow-indigo-6 shadow-[0px_0px_0px_1px]";
      }
      break;
    case "outline":
    default:
      switch (type) {
        case "error":
          return "shadow-red-10 shadow-[0px_0px_0px_1px] bg-red-2";
        case "info":
          return "shadow-blue-10 shadow-[0px_0px_0px_1px] bg-blue-2";
        case "success":
          return "shadow-grass-10 shadow-[0px_0px_0px_1px] bg-grass-3";
        case "warning":
          return "shadow-yellow-10 shadow-[0px_0px_0px_1px] bg-yellow-2";
      }
  }
};

const StatusLabel = ({
  children,
  variant = "outline",
  type = "success",
  role,
}: {
  children: React.ReactNode;
  type?: StatusLabelType;
  variant?: StatusLabelVariantType;
  role?: React.AriaRole;
}) => {
  return (
    <div
      role={role}
      className={`${getVariantCSS(variant, type)} px-2 py-1 inline-block`}
    >
      {children}
    </div>
  );
};

export default StatusLabel;
