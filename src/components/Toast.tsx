import Paragraph from "./Paragraph";
import {
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const Toast = ({
  title,
  subTitle,
  caption,
}: {
  title: string;
  subTitle?: string;
  caption?: string;
}) => {
  //TODO: Toast types, info, success, warning
  return (
    <div className="border-l-2 border-red-10 p-4 bg-primary-dark-gray">
      <div className="flex items-center space-x-2">
        <ExclamationCircleIcon className="h-4 w-4 text-red-10" />
        <h5 className="font-bold grow">{title}</h5>
        <div className="justify-end">
          <XCircleIcon className="h-5 w-5" />
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
