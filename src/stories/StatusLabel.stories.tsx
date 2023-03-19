import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Heading, StatusLabel, Text } from "..";

export default {
  title: "UI/StatusLabel",
  component: StatusLabel,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof StatusLabel>;

const Template: ComponentStory<typeof StatusLabel> = () => {
  return (
    <div className="space-y-12">
      <Heading>Variants</Heading>
      <div>
        <Text>Outline</Text>
        <section className="flex md:block flex-col items-start md:space-x-4 space-y-4">
          <StatusLabel>Data has been sent.</StatusLabel>
          <StatusLabel type="error">Data failed.</StatusLabel>
          <StatusLabel type="warning">Not all files was uploaded.</StatusLabel>
          <StatusLabel type="info">Pro tip: yolo.</StatusLabel>
        </section>
      </div>
      <div>
        <Text>Filled</Text>
        <section className="flex md:block flex-col items-start md:space-x-4 space-y-4">
          <StatusLabel variant="filled">Data has been sent.</StatusLabel>
          <StatusLabel variant="filled" type="error">
            Data failed.
          </StatusLabel>
          <StatusLabel variant="filled" type="warning">
            Not all files was uploaded.
          </StatusLabel>
          <StatusLabel variant="filled" type="info">
            Pro tip: yolo.
          </StatusLabel>
        </section>
      </div>
      <div>
        <Text>Filled-Border</Text>
        <section className="flex md:block flex-col items-start md:space-x-4 space-y-4">
          <StatusLabel variant="filled-border">Data has been sent.</StatusLabel>
          <StatusLabel variant="filled-border" type="error">
            Data failed.
          </StatusLabel>
          <StatusLabel variant="filled-border" type="warning">
            Not all files was uploaded.
          </StatusLabel>
          <StatusLabel variant="filled-border" type="info">
            Pro tip: yolo.
          </StatusLabel>
        </section>
      </div>
    </div>
  );
};

export const Variants = Template.bind({});
