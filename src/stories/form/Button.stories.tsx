import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, ButtonVariantType, Heading, Paragraph } from "../..";

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
const Template: ComponentStory<typeof Button> = ({
  children,
}: {
  children: string;
}) => {
  return (
    <div className="space-y-8">
      <Heading>Variants</Heading>
      <div className="space-x-4">
        <Button onClick={action("clicked")}>{children}</Button>
        <Button variant="error" onClick={action("clicked")}>
          {children}
        </Button>
        <Button variant="warning" onClick={action("clicked")}>
          {children}
        </Button>
        <Button variant="info" onClick={action("clicked")}>
          {children}
        </Button>
      </div>
      <div className="space-x-4">
        <Button disabled onClick={action("clicked")}>
          {children}
        </Button>
        <Button disabled variant="error" onClick={action("clicked")}>
          {children}
        </Button>
        <Button disabled variant="warning" onClick={action("clicked")}>
          {children}
        </Button>
        <Button disabled variant="info" onClick={action("clicked")}>
          {children}
        </Button>
      </div>
    </div>
  );
};

export const Variants = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Variants.args = {
  children: "Button",
};
