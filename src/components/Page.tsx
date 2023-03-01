import React from "react";

const Title = ({ children }: { children: string }) => {
  return <h2 className="text-cyan-10 text-xl mb-4 tk-uniwars">{children}</h2>;
};

const Page = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="p-4">
      <Title>{title}</Title>
      {children}
    </div>
  );
};

export default Page;
