import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { useState } from "react";
import { Button, Form, Input, StatusLabel } from "../../";

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
        disabled={dataSent}
      />
      <Input
        id="password"
        label="Password"
        placeholder="Write your Password"
        type="password"
        required
        disabled={dataSent}
      />
      <div className="space-x-4 flex ">
        <Button
          color="gradient"
          size="small"
          onClick={onSubmit}
          disabled={dataSent}
          type="button"
        >
          Log in
        </Button>
        {dataSent && (
          <div className="grid flex-grow">
            <StatusLabel
              type="info-filled"
              className="flex space-x-2 items-center flex-1"
            >
              <InformationCircleIcon width={20} />
              <span className="text-xs">Data sent</span>
            </StatusLabel>
          </div>
        )}
      </div>
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
  await expect(emailInput).toHaveAttribute("disabled");
  await expect(passwordInput).toHaveAttribute("disabled");
  await expect(submitButton).toHaveAttribute("disabled");
};
