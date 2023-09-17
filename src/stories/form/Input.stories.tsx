import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

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
const Template: ComponentStory<typeof Input> = ({ value, ...args }) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <Input
      {...{
        ...args,
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value),
      }}
    />
  );
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

export const Disabled = Template.bind({});
Disabled.args = {
  ...inputArgs,
  disabled: true,
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...inputArgs,
  defaultValue: "Tony Iommi",
};

export const WithError = Template.bind({});
WithError.args = {
  ...inputArgs,
  errorText: "Error: Wrong name",
  hasError: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
  ...inputArgs,
  value: "Dave Mustaine",
};
