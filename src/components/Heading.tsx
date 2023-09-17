import React from "react";

type HeadingType =
  | "screenTitle"
  | "sectionTitle"
  | "blockTitle"
  | "subBlockTitle"
  | "subSubBlockTitle";
type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "legend" | "span";

const getHeadingCSS = (type: HeadingType) => {
  switch (type) {
    case "subSubBlockTitle":
      return "text-cyan-10 text-sm font-zonapro zonapro";
    case "subBlockTitle":
      return "text-cyan-10 text-base font-zonapro zonapro";
    case "blockTitle":
      return "text-cyan-10 text-lg tk-uniwars";
    case "sectionTitle":
      return "text-cyan-10 text-xl tk-uniwars";
    case "screenTitle":
    default:
      return "text-cyan-10 text-3xl tk-uniwars";
  }
};
const Heading = ({
  children,
  type = "screenTitle",
  as = "h1",
}: {
  children: React.ReactNode;
  type?: HeadingType;
  as?: TagType;
}) => {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;

  return <CustomTag className={`${getHeadingCSS(type)}`}>{children}</CustomTag>;
};

export default Heading;
