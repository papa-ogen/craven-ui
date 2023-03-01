import "../index.css";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark bg-gray-1 text-slate-12 min-h-screen">{children}</div>
  );
};
export default ContextProvider;

// withBg ? "bg-logo bg-no-repeat bg-cover bg-center " : ""
