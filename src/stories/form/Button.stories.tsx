import { BeakerIcon } from "@heroicons/react/24/solid";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, Heading } from "../..";
export default {
  title: "UI/Form/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => {
  return (
    <div>
      <Heading>Variants</Heading>
      <div className="flex space-y-8 flex-col mt-4">
        <div className="flex md:block flex-col items-start md:space-x-4 space-y-4">
          <Button color="brand" size="large" onClick={action("clicked")}>
            Success
          </Button>
          <Button color="brand" size="small" onClick={action("clicked")}>
            Failure
          </Button>
          <Button
            color="brand"
            size="small"
            onClick={action("clicked")}
            disabled
          >
            Failure
          </Button>
        </div>
        <div className="flex md:block flex-col items-start md:space-x-4 space-y-4">
          <Button color="accent" size="large" onClick={action("clicked")}>
            Success
          </Button>
          <Button color="accent" size="small" onClick={action("clicked")}>
            Failure
          </Button>
          <Button
            color="accent"
            size="small"
            onClick={action("clicked")}
            disabled
          >
            Failure
          </Button>
        </div>
        <div className="flex md:block flex-col items-start md:space-x-4 space-y-4">
          <Button color="gradient" size="large" onClick={action("clicked")}>
            <div className="flex space-x-2">
              <BeakerIcon className="h-6 w-6" /> <span>Success</span>
            </div>
          </Button>
          <Button color="gradient" size="small" onClick={action("clicked")}>
            Failure
          </Button>
          <Button
            color="gradient"
            size="small"
            onClick={action("clicked")}
            disabled
          >
            Failure
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Variants = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Variants.args = {
  children: "Button",
};
