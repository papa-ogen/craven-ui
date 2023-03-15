import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Heading, StatusLabel } from "..";

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
    <div>
      <Heading>Outline</Heading>
      <section>
        <StatusLabel>Data has been sent.</StatusLabel>
        <StatusLabel type="error">Data failed.</StatusLabel>
        <StatusLabel type="warning">Not all files was uploaded.</StatusLabel>
        <StatusLabel type="info">Pro tip: yolo.</StatusLabel>
      </section>
      <Heading>Filled</Heading>
      <section>
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
      <Heading>Filled-Border</Heading>
      <section>
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
  );
};

export const Variants = Template.bind({});
