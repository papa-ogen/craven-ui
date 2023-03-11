import "../index.css";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark bg-gray-1 text-slate-12 min-h-screen">
      <div className="bg-gradient-to-r from-purple-1">
        <div className="bg-logo bg-no-repeat bg-cover bg-center min-h-screen flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
};
export default ContextProvider;

// withBg ? "bg-logo bg-no-repeat bg-cover bg-center " : ""
