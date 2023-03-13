import { BeakerIcon } from "@heroicons/react/24/solid";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Heading, Paragraph } from "../..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = () => {
  return (
    <div className="space-y-12">
      <Heading>Variants</Heading>
      <div>
        <Paragraph>Standard</Paragraph>
        <div className="space-x-4">
          <Button onClick={action("clicked")}>Success</Button>
          <Button variant="error" onClick={action("clicked")}>
            Error
          </Button>
          <Button variant="warning" onClick={action("clicked")}>
            Warning
          </Button>
          <Button variant="info" onClick={action("clicked")}>
            Info
          </Button>
        </div>
      </div>
      <div>
        <Paragraph>Disabled</Paragraph>
        <div className="space-x-4">
          <Button disabled onClick={action("clicked")}>
            Success
          </Button>
          <Button disabled variant="error" onClick={action("clicked")}>
            Error
          </Button>
          <Button disabled variant="warning" onClick={action("clicked")}>
            Warning
          </Button>
          <Button disabled variant="info" onClick={action("clicked")}>
            Info
          </Button>
        </div>
      </div>
      <div>
        <Paragraph>Icon</Paragraph>
        <div className="space-x-4">
          <Button onClick={action("clicked")}>
            <BeakerIcon className="h-6 w-6" />
          </Button>
          <Button variant="error" onClick={action("clicked")}>
            <BeakerIcon className="h-6 w-6" />
          </Button>
          <Button variant="warning" onClick={action("clicked")}>
            <BeakerIcon className="h-6 w-6" />
          </Button>
          <Button variant="info" onClick={action("clicked")}>
            <BeakerIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div>
        <Paragraph>Disabled Icon</Paragraph>
        <div className="space-x-4">
          <Button disabled onClick={action("clicked")}>
            <BeakerIcon className="h-6 w-6" />
          </Button>
          <Button disabled variant="error" onClick={action("clicked")}>
            <BeakerIcon className="h-6 w-6" />
          </Button>
          <Button disabled variant="warning" onClick={action("clicked")}>
            <BeakerIcon className="h-6 w-6" />
          </Button>
          <Button disabled variant="info" onClick={action("clicked")}>
            <BeakerIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div>
        <Paragraph>Prefix</Paragraph>
        <div className="space-x-4">
          <Button
            onClick={action("clicked")}
            prefix={<BeakerIcon className="h-6 w-6" />}
          >
            Success
          </Button>
          <Button
            variant="error"
            onClick={action("clicked")}
            prefix={<BeakerIcon className="h-6 w-6" />}
          >
            Error
          </Button>
          <Button
            variant="warning"
            onClick={action("clicked")}
            prefix={<BeakerIcon className="h-6 w-6" />}
          >
            Warning
          </Button>
          <Button
            variant="info"
            onClick={action("clicked")}
            prefix={<BeakerIcon className="h-6 w-6" />}
          >
            Info
          </Button>
        </div>
      </div>
      <div>
        <Paragraph>Suffix</Paragraph>
        <div className="space-x-4">
          <Button
            onClick={action("clicked")}
            suffix={<BeakerIcon className="h-6 w-6" />}
          >
            Success
          </Button>
          <Button
            variant="error"
            onClick={action("clicked")}
            suffix={<BeakerIcon className="h-6 w-6" />}
          >
            Error
          </Button>
          <Button
            variant="warning"
            onClick={action("clicked")}
            suffix={<BeakerIcon className="h-6 w-6" />}
          >
            Warning
          </Button>
          <Button
            variant="info"
            onClick={action("clicked")}
            suffix={<BeakerIcon className="h-6 w-6" />}
          >
            Info
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
