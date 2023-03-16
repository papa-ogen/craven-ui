import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Button,
  ContextProvider,
  Input,
  Page,
  Text,
  Link,
  Heading,
} from "../..";
import { Default } from "../form/LoginForm.stories";

export default {
  title: "Templates/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="px-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = ({ children, ...args }) => (
  <Page {...args}>{children}</Page>
);

export const LoginPage = Template.bind({});
LoginPage.args = {
  title: "Login Page",
  children: (
    <>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
        aspernatur?
      </Text>
      <br />
      <Heading type="subBlockTitle">Lorem Ipsum</Heading>
      <Text>
        Nulla nam delectus cupiditate assumenda illum earum odit hic repellat
        ex, excepturi aspernatur temporibus mollitia quo, aperiam eius molestiae
        vero. <Link ariaLabel="Forgot Password Link">Forgot Password</Link>
      </Text>
      <div className="flex max-w-sm pt-4">
        <Default />
      </div>
      <br />
      <Heading type="subSubBlockTitle">Lorem Ipsum</Heading>
      <Text size="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet
        provident deserunt voluptas repudiandae rem commodi dolore, inventore
        distinctio asperiores dicta mollitia iure quis eligendi? Tempore ea
        accusantium illum officia!
      </Text>
    </>
  ),
};
export const Allocation = Template.bind({});
Allocation.args = {
  title: "Allocate Time",
  children: <Text>Hello World</Text>,
};
