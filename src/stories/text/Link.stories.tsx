import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Link } from "../..";

export default {
  title: "Text/Link",
  component: Link,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ children, ...args }) => (
  <Link {...args}>{children}</Link>
);

export const Default = Template.bind({});
Default.args = {
  children: "A Simple link",
  ariaLabel: "A Simple link",
};

export const Invert = Template.bind({});
Invert.args = {
  children: "A Simple link",
  invert: true,
  ariaLabel: "A Simple link",
};
