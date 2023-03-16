import React from "react";
import Heading from "./Heading";

const Page = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="py-4 max-w-4xl mb-auto">
      <Heading type="sectionTitle" tag="h2">
        {title}
      </Heading>
      {children}
    </div>
  );
};

export default Page;
