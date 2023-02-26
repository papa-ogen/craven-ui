import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Page, Paragraph } from "../components";

export default {
  title: "EasyTime/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = ({ children, ...args }) => (
  <Page {...args}>{children}</Page>
);

export const Default = Template.bind({});
Default.args = {
  title: "Page Title",
  children: (
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
      aspernatur? Nulla nam delectus cupiditate assumenda illum earum odit hic
      repellat ex, excepturi aspernatur temporibus mollitia quo, aperiam eius
      molestiae vero.
    </Paragraph>
  ),
};
export const Allocation = Template.bind({});
Allocation.args = {
  title: "Allocate Time",
  children: <Paragraph>Hello World</Paragraph>,
};
// // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// LoggedIn.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole("button", { name: /Push/i });
//   await userEvent.click(loginButton);
// };
