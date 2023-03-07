import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Footer } from "..";

export default {
  title: "UI/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
