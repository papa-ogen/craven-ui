import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "../..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Form/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div className="p-4 max-w-md">
        <Story />
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

const inputArgs = {
  id: "firstName",
  label: "First Name",
  placeholder: "Write your first name here",
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...inputArgs,
};

export const WithError = Template.bind({});
WithError.args = {
  ...inputArgs,
  error: "Error: Wrong name",
};
export const Disabled = Template.bind({});
Disabled.args = {
  ...inputArgs,
  disabled: true,
};
