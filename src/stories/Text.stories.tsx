import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "..";

export default {
  title: "Text/Text",
  component: Text,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <div className="max-w-xl p-8">{<Story />}</div>],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <>
    <Text {...args}>{children}</Text>
    <Text {...args}>{children}</Text>
    <Text {...args}>{children}</Text>
    <Text {...args}>{children}</Text>
    <Text size="sm">
      Built with React, TypeScript, Tailwindcss and{" "}
      <Text
        size="sm"
        weight="bold"
        as="span"
        color="link"
        decoration="underline"
      >
        Vite.
      </Text>{" "}
      And other stuff.
    </Text>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dignissimos, sapiente deserunt mollitia aliquid repudiandae soluta atque totam molestiae, odio repellat eos possimus placeat illo veniam iste. Dolorem, consequuntur sequi!",
};

export const NoMargin = Template.bind({});
NoMargin.args = {
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dignissimos, sapiente deserunt mollitia aliquid repudiandae soluta atque totam molestiae, odio repellat eos possimus placeat illo veniam iste. Dolorem, consequuntur sequi!",
};

export const SmallText = Template.bind({});
SmallText.args = {
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dignissimos, sapiente deserunt mollitia aliquid repudiandae soluta atque totam molestiae, odio repellat eos possimus placeat illo veniam iste. Dolorem, consequuntur sequi!",
};

export const Truncate = Template.bind({});
Truncate.args = {
  truncate: true,
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dignissimos, sapiente deserunt mollitia aliquid repudiandae soluta atque totam molestiae, odio repellat eos possimus placeat illo veniam iste. Dolorem, consequuntur sequi!",
};
