import React from "react";

const Title = ({ children }: { children: string }) => {
  return <h2 className="text-cyan-10 text-xl tk-uniwars">{children}</h2>;
};

const Page = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="py-4 max-w-4xl mb-auto">
      <Title>{title}</Title>
      {children}
    </div>
  );
};

export default Page;
