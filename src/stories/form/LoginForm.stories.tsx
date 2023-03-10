import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { useState } from "react";
import { expect } from "@storybook/jest";
import { Button, Input, Form } from "../../";

export default {
  title: "UI/Form/Login",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <div className="max-w-md p-8">{<Story />}</div>],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => {
  const [dataSent, setDataSent] = useState(false);

  const onSubmit = () => {
    setDataSent(true);
  };

  return (
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
      <Button onClick={onSubmit}>Log in</Button>
      {dataSent && <p role="alert">Data has been sent</p>}
    </Form>
  );
};

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailInput = canvas.getByLabelText("E-mail", {
    selector: "input",
    exact: false,
  });

  await userEvent.type(emailInput, "example-email@email.com", {
    delay: 100,
  });

  const passwordInput = canvas.getByLabelText("password", {
    selector: "input",
    exact: false,
  });

  await userEvent.type(passwordInput, "ExamplePassword", {
    delay: 100,
  });
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const submitButton = canvas.getByRole("button");

  await userEvent.click(submitButton);

  await expect(canvas.getByRole("alert")).toBeInTheDocument();
};
