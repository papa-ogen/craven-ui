import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, ButtonVariantType } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({
  children,
  variant,
}: {
  children: string;
  variant?: ButtonVariantType;
}) => <Button variant={variant}>{children}</Button>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Button",
};

export const Error = Template.bind({});
Error.args = {
  children: "Button",
  variant: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Button",
  variant: "warning",
};

export const Info = Template.bind({});
Info.args = {
  children: "Button",
  variant: "info",
};
