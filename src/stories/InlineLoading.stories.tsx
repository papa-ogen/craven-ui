import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Button, InlineLoading } from "..";

const MockSubmission = ({
  children,
}: {
  children: (cb: {
    handleSubmit: () => void;
    isSubmitting: boolean;
    success: boolean;
    description: string;
    ariaLive: "off" | "assertive" | "polite" | undefined;
  }) => JSX.Element;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("Submitting...");
  const [ariaLive, setAriaLive] =
    useState<"off" | "assertive" | "polite" | undefined>("off");
  const handleSubmit = () => {
    setIsSubmitting(true);
    setAriaLive("assertive");

    // Instead of making a real request, we mock it with a timer
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setDescription("Submitted!");

      // To make submittable again, we reset the state after a bit so the user gets completion feedback
      setTimeout(() => {
        setSuccess(false);
        setDescription("Submitting...");
        setAriaLive("off");
      }, 1500);
    }, 2000);
  };

  return children({
    handleSubmit,
    isSubmitting,
    success,
    description,
    ariaLive,
  });
};

export default {
  title: "UI/InlineLoading",
  component: InlineLoading,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof InlineLoading>;

const Template: ComponentStory<typeof InlineLoading> = () => (
  <MockSubmission>
    {({ handleSubmit, isSubmitting, success, description, ariaLive }) => (
      <div className="flex space-x-2">
        <Button variant="info" disabled={isSubmitting || success}>
          Cancel
        </Button>
        {isSubmitting || success ? (
          <InlineLoading
            description={description}
            ariaLive={ariaLive}
            status={success ? "finished" : "active"}
          />
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    )}
  </MockSubmission>
);

export const Default = Template.bind({});
