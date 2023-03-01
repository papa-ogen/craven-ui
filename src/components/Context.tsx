import "../index.css";

const ContextProvider = ({
  withBg = true,
  children,
}: {
  withBg?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`"dark bg-gray-1 ${
        withBg && "bg-logo-dark bg-no-repeat bg-cover bg-center "
      }text-slate-12 min-h-screen"`}
    >
      {children}
    </div>
  );
};
export default ContextProvider;
