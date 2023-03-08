import React from "react";

const Link = ({
  url,
  children,
  target,
}: {
  url?: string;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
}) => {
  return (
    <a href={url || "#"} target={target} className="text-sky-9 underline">
      {children}
    </a>
  );
};

export default Link;
