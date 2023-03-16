type TagType = "p" | "span" | "div";
type SizeType = "xs" | "sm" | "base" | "lg" | "xl";
type WeightType = "normal" | "light" | "medium" | "semibold" | "bold";
type ColorType = "inherit" | "black" | "white" | "disabled" | "link";
type DecorationType = "underline" | "overline" | "line-through";
type LeadingType = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

const getLeading = (type?: LeadingType) => {
  if (!type) return "";

  switch (type) {
    case "loose":
      return "leading-loose";
    case "relaxed":
      return "leading-relaxed";
    case "normal":
      return "leading-normal";
    case "snug":
      return "leading-snug";
    case "tight":
      return "leading-tight";
  }
};

const getTextColor = (type: ColorType) => {
  switch (type) {
    case "disabled":
      return "text-gray-8";
    case "link":
      return "text-cyan-10";
    case "white":
      return "text-white";
    case "black":
      return "text-black";
    case "inherit":
    default:
      return "text-inherit";
  }
};

const Text = ({
  children,
  as = "p",
  size = "base",
  weight = "normal",
  italic,
  color = "inherit",
  decoration,
  truncate,
  leading,
}: {
  children: React.ReactNode;
  as?: TagType;
  size?: SizeType;
  weight?: WeightType;
  italic?: boolean;
  color?: ColorType;
  decoration?: DecorationType;
  truncate?: boolean;
  leading?: LeadingType;
}) => {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;

  return (
    <CustomTag
      className={`text-${size} font-${weight}${
        italic ? " italic" : ""
      } ${getTextColor(color)}${truncate ? " truncate ..." : ""} ${
        decoration ? decoration : ""
      } ${getLeading(leading)}`}
    >
      {children}
    </CustomTag>
  );
};

export default Text;
