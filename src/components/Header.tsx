type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="fixed to-dark-950 from-black bg-gradient-to-b bg-dark-500 border-b-[1px] border-orange-500 p-2 flex items-center w-full transition ease-in-out delay-200">
      {children}
    </header>
  );
};

export default Header;
