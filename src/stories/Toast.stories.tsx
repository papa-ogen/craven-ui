import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toast } from "..";

export default {
  title: "UI/Toast",
  component: Toast,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = () => {
  return (
    <div className="space-y-1 flex-col">
      <Toast title="Notification Title" />
    </div>
  );
};

export const Variants = Template.bind({});
