import {
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Paragraph from "./Paragraph";

export type ToastVariantType = "error" | "success" | "warning" | "info";

const getVariantColor = (variant: ToastVariantType) => {
  switch (variant) {
    case "error":
      return "red";
    case "success":
      return "grass";
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
    <div className={`border-l-2 border-${color}-10 p-4 bg-primary-dark-gray`}>
      <div className="flex items-center space-x-2">
        <ExclamationCircleIcon className={`h-4 w-4 text-${color}-10`} />
        <h5 className="font-bold grow">{title}</h5>
        <div className="justify-end">
          <button
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
          <Paragraph variant="small" noMargin>
            Sub Title
          </Paragraph>
        </div>
      )}
      {caption && (
        <div className="pl-6 mt-8">
          <Paragraph variant="small">{caption}</Paragraph>
        </div>
      )}
    </div>
  );
};

export default Toast;
