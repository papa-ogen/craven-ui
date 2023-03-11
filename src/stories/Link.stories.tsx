import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ContextProvider, Input, Page, Paragraph, Link } from "..";

export default {
  title: "UI/Link",
  component: Link,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ children, ...args }) => (
  <Link {...args}>{children}</Link>
);

export const Default = Template.bind({});
Default.args = {
  children: "A Simple link",
};

export const Invert = Template.bind({});
Invert.args = {
  children: "A Simple link",
  invert: true,
};
