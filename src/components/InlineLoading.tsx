import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import Spinner from "./Spinner";

const InlineLoading = ({
  description,
  ariaLive,
  status,
}: {
  description: string;
  ariaLive?: "off" | "assertive" | "polite" | undefined;
  status: "finished" | "active" | "error";
}) => {
  const statusMarkup = () => {
    switch (status) {
      case "active":
        return <Spinner />;
      case "error":
        return <ExclamationCircleIcon className="h-4 w-4 text-red-10" />;
      default:
      case "finished":
        return <CheckIcon className="h-4 w-4 text-grass-10" />;
    }
  };

  return (
    <div className="flex items-center space-x-1" aria-live={ariaLive}>
      {statusMarkup()}
      <span className="text-xs">{description}</span>
    </div>
  );
};

export default InlineLoading;
