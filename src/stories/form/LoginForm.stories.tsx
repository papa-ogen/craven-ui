import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Input, Form } from "../../";

export default {
  title: "UI/Form/Login",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <div className="max-w-md p-8">{<Story />}</div>],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => (
  <Form>
    <Input
      id="email"
      label="E-mail"
      placeholder="Sign in with your e-mail address"
      required
    />
    <Input
      id="password"
      label="Password"
      placeholder="Write your Password"
      type="password"
      required
    />
    <Button>Log in</Button>
  </Form>
);

export const Default = Template.bind({});
