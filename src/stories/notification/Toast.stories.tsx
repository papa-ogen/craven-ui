import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toast } from "../..";

export default {
  title: "Notification/Toast",
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
      <Toast
        title="Notification Title"
        subTitle="sub title"
        caption="lorem ipsum"
      />
      <Toast
        title="Notification Title"
        subTitle="sub title"
        caption="lorem ipsum"
        variant="info"
      />
      <Toast
        title="Notification Title"
        subTitle="sub title"
        caption="lorem ipsum"
        variant="success"
      />
      <Toast
        title="Notification Title"
        subTitle="sub title"
        caption="lorem ipsum"
        variant="warning"
      />
    </div>
  );
};

export const Variants = Template.bind({});
