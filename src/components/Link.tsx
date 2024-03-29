import React from "react";

const Link = ({
  url,
  children,
  ariaLabel,
  target,
  invert,
  color,
  hoverColor,
}: {
  url?: string;
  children: React.ReactNode;
  ariaLabel: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  invert?: boolean;
  color?: string;
  hoverColor?: string;
}) => {
  const linkColor = color ? color : invert ? "text-sky-8" : "text-sky-9";
  const linkHoverColor = `hover:${hoverColor}` || "";
  return (
    <a
      href={url || "#"}
      target={target}
      className={`${linkColor} ${linkHoverColor} underline`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default Link;
