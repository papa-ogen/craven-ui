import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Heading } from "..";

export default {
  title: "Text/Heading",
  component: Heading,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <div className="p-4">{<Story />}</div>],
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = () => (
  <>
    <Heading>ScreenTitle H1</Heading>
    <Heading type="sectionTitle" as="h2">
      SectionTitle H2
    </Heading>
    <Heading type="blockTitle" as="h3">
      BlockTitle H3
    </Heading>
    <Heading type="subBlockTitle" as="h4">
      SubBlockTitle H4
    </Heading>
    <Heading type="subSubBlockTitle" as="h5">
      SubSubBlockTitle H5
    </Heading>
  </>
);

export const Variants = Template.bind({});
