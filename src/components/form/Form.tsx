import React from "react";

type AutoCompleteType = "on" | "off";

const Form = ({
  autoComplete = "on",
  children,
}: {
  autoComplete?: AutoCompleteType;
  children?: React.ReactNode;
}) => {
  return (
    <form className="w-full" autoComplete={autoComplete}>
      {children}
    </form>
  );
};

export default Form;
