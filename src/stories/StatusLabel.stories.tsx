import {
  CodeBracketSquareIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Heading, StatusLabel, Text } from "..";

export default {
  title: "UI/StatusLabel",
  component: StatusLabel,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof StatusLabel>;

const Template: ComponentStory<typeof StatusLabel> = () => {
  return (
    <div className="space-y-12">
      <Heading>Variants</Heading>
      <div>
        <Text>Outline</Text>
        <section className="flex space-x-4 w-full">
          <StatusLabel
            type="success-outline"
            className="flex space-x-2 items-center flex-1"
          >
            Data has been sent.
          </StatusLabel>
          <StatusLabel
            type="error-outline"
            className="flex space-x-2 items-center flex-1"
          >
            Data failed.
          </StatusLabel>
          <StatusLabel
            type="warning-outline"
            className="flex space-x-2 items-center flex-1"
          >
            Not all files were uploaded.
          </StatusLabel>
          <StatusLabel
            type="info-outline"
            className="flex space-x-2 items-center flex-1"
          >
            Pro tip: yolo.
          </StatusLabel>
        </section>
      </div>
      <div>
        <Text>Filled</Text>
        <section className="flex space-x-4 w-full">
          <StatusLabel
            type="success-filled"
            className="flex space-x-2 items-center flex-1"
          >
            <CodeBracketSquareIcon width={20} />
            <span className="text-xs">Data has been sent.</span>
          </StatusLabel>
          <StatusLabel
            type="error-filled"
            className="flex space-x-2 items-center flex-1"
          >
            <ExclamationCircleIcon width={20} />
            <span className="text-xs">Data failed.</span>
          </StatusLabel>
          <StatusLabel
            type="warning-filled"
            className="flex space-x-2 items-center flex-1"
          >
            <ShieldExclamationIcon width={20} />
            <span className="text-xs">Not all files were uploaded.</span>
          </StatusLabel>
          <StatusLabel
            type="info-filled"
            className="flex space-x-2 items-center flex-1"
          >
            <InformationCircleIcon width={20} />
            <span className="text-xs">Pro tip: yolo.</span>
          </StatusLabel>
        </section>
      </div>
    </div>
  );
};

export const Variants = Template.bind({});
