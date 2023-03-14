import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tag } from "../";

export default {
  title: "UI/Tag",
  component: Tag,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = () => {
  return (
    <div className="space-x-1">
      <Tag text="tag content" />
      <Tag text="tag content" variant="crimson" />
      <Tag text="tag content" variant="pink" />
      <Tag text="tag content" variant="plum" />
      <Tag text="tag content" variant="purple" />
      <Tag text="tag content" variant="violet" />
    </div>
  );
};

export const Variants = Template.bind({});
