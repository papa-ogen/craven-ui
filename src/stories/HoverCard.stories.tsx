import { ComponentMeta, ComponentStory } from "@storybook/react";

import { HoverCard } from "..";

export default {
  title: "UI/HoverCard",
  component: HoverCard,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HoverCard>;

const Template: ComponentStory<typeof HoverCard> = () => <HoverCard />;

export const Default = Template.bind({});
