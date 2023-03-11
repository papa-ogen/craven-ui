const Paragraph = ({
  children,
  variant = "normal",
  truncate,
  noMargin,
}: {
  children: React.ReactNode;
  variant?: "normal" | "small";
  truncate?: boolean;
  noMargin?: boolean;
}) => {
  return (
    <p
      className={`${noMargin ? "" : "mt-1 mb-3 "}font-zonapro zonapro${
        variant === "normal" ? "" : " text-sm"
      } ${truncate && " truncate ..."}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
