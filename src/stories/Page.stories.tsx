import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Input, Page, Paragraph } from "..";
import { Default } from "./form/LoginForm.stories";

export default {
  title: "UI/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = ({ children, ...args }) => (
  <Page {...args}>{children}</Page>
);

export const LoginPage = Template.bind({});
LoginPage.args = {
  title: "Login Page",
  children: (
    <>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
        aspernatur?
      </Paragraph>
      <Paragraph>
        Nulla nam delectus cupiditate assumenda illum earum odit hic repellat
        ex, excepturi aspernatur temporibus mollitia quo, aperiam eius molestiae
        vero.{" "}
        <a href="#" className="text-sky-9">
          Forgot Password
        </a>
      </Paragraph>
      <div className="flex max-w-sm">
        <Default />
      </div>
    </>
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
