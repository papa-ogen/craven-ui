type VariantType = "tomato" | "crimson" | "pink" | "plum" | "purple" | "violet";

const getVariantCSS = (variant: VariantType) => {
  switch (variant) {
    case "tomato":
      return "bg-tomato-11 text-mauve-12";
    case "crimson":
      return "bg-crimson-11 text-mauve-12";
    case "pink":
      return "bg-pink-11 text-mauve-12";
    case "plum":
      return "bg-plum-11 text-mauve-12";
    case "purple":
      return "bg-purple-11 text-mauve-12";
    case "violet":
      return "bg-violet-11 text-mauve-12";
  }
};

const Tag = ({
  text,
  variant = "tomato",
}: {
  text: string;
  variant?: VariantType;
}) => {
  return (
    <span
      className={`${getVariantCSS(
        variant
      )} px-1.5 pb-0.5 rounded-md text-xs inline-block`}
    >
      {text}
    </span>
  );
};

export default Tag;
