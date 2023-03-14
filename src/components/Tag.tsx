import React from "react";

type VariantType = "red" | "yellow" | "blue" | "green";

const Tag = ({
  text,
  variant = "green",
}: {
  text: string;
  variant: VariantType;
}) => {
  return <span className="bg-grass-10">{text}</span>;
};

export default Tag;
