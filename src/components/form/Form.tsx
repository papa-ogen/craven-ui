import React from "react";

const Form = ({ children }: { children?: React.ReactNode }) => {
  return <form className="w-full">{children}</form>;
};

export default Form;
