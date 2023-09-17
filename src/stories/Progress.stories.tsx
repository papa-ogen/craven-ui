import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { Progress } from "..";

export default {
  title: "UI/Progress",
  component: Progress,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <Progress {...args} progress={progress} />
      </div>
      <div>
        <Progress {...args} progress={30} />
      </div>
      <div>
        <Progress {...args} progress={60} />
      </div>
      <div>
        <Progress {...args} progress={90} />
      </div>
      <div>
        <Progress {...args} progress={100} />
      </div>
    </div>
  );
};

export const Variants = Template.bind({});
export const WithLabelBottom = Template.bind({});
WithLabelBottom.args = {
  labelBottom: "Progress",
};

export const WithLabelTop = Template.bind({});
WithLabelTop.args = {
  labelTop: "Progress",
};
