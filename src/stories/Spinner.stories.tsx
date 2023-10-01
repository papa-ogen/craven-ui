import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spinner } from "..";

export default {
  title: "UI/Spinner",
  component: Spinner,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => {
  return (
    <div className="space-y-4">
      <div className="flex space-x-10 items-center">
        <Spinner />
        <Spinner className="h-10 w-10" />
        <Spinner className="h-20 w-20" />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
