import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Paragraph } from "..";

export default {
  title: "UI/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <div className="max-w-xl p-8">{<Story />}</div>],
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = ({ children, ...args }) => (
  <>
    <Paragraph {...args}>{children}</Paragraph>
    <Paragraph {...args}>{children}</Paragraph>
    <Paragraph {...args}>{children}</Paragraph>
    <Paragraph {...args}>{children}</Paragraph>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dignissimos, sapiente deserunt mollitia aliquid repudiandae soluta atque totam molestiae, odio repellat eos possimus placeat illo veniam iste. Dolorem, consequuntur sequi!",
};

export const Truncate = Template.bind({});
Truncate.args = {
  truncate: true,
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dignissimos, sapiente deserunt mollitia aliquid repudiandae soluta atque totam molestiae, odio repellat eos possimus placeat illo veniam iste. Dolorem, consequuntur sequi!",
};

export const SmallText = Template.bind({});
SmallText.args = {
  variant: "small",
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dignissimos, sapiente deserunt mollitia aliquid repudiandae soluta atque totam molestiae, odio repellat eos possimus placeat illo veniam iste. Dolorem, consequuntur sequi!",
};
export const NoMargin = Template.bind({});
NoMargin.args = {
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dignissimos, sapiente deserunt mollitia aliquid repudiandae soluta atque totam molestiae, odio repellat eos possimus placeat illo veniam iste. Dolorem, consequuntur sequi!",
  noMargin: true,
};
