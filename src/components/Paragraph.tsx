const Paragraph = ({
  children,
  variant = "normal",
  truncate,
}: {
  children: React.ReactNode;
  variant?: "normal" | "small";
  truncate?: boolean;
}) => {
  return (
    <p
      className={`mb-4 font-zonapro zonapro${
        variant === "normal" ? "" : " text-sm"
      } ${truncate && " truncate ..."}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
