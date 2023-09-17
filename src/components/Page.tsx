import React from "react";
import Heading from "./Heading";

const Page = ({
  title,
  children,
  noPadding,
}: {
  title: string;
  children: React.ReactNode;
  noPadding?: boolean;
}) => {
  return (
    <div className={`py-4 ${noPadding ? "" : "px-4 "}max-w-4xl mb-auto`}>
      <Heading type="sectionTitle" as="h2">
        {title}
      </Heading>
      {children}
    </div>
  );
};

export default Page;
