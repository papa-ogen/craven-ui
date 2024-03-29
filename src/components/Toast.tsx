import {
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Text from "./Text";

export type ToastVariantType = "error" | "success" | "warning" | "info";

const getVariantColor = (variant: ToastVariantType) => {
  switch (variant) {
    case "error":
      return "red";
    case "success":
      return "green";
    case "warning":
      return "yellow";
    case "info":
      return "blue";
  }
};

const Toast = ({
  title,
  subTitle,
  caption,
  variant = "error",
  onClick,
}: {
  title: string;
  subTitle?: string;
  caption?: string;
  variant?: ToastVariantType;
  onClick?: () => void;
}) => {
  const color = getVariantColor(variant);
  return (
    <div
      className={`border-l-2 border-${color}-10 p-4 bg-dark-900 hover:bg-slate-6 transition ease-in-out delay-100`}
    >
      <div className="flex items-center space-x-2">
        <ExclamationCircleIcon className={`h-4 w-4 text-${color}-10`} />
        <h5 className="font-bold grow">{title}</h5>
        <div className="justify-end">
          <button
            type="button"
            className={`hover:text-${color}-10`}
            onClick={onClick && onClick}
            aria-label="Close Button"
          >
            <XCircleIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {subTitle && (
        <div className="pl-6">
          <Text size="sm">Sub Title</Text>
        </div>
      )}
      {caption && (
        <div className="pl-6 mt-8">
          <Text size="xs">{caption}</Text>
        </div>
      )}
    </div>
  );
};

export default Toast;
