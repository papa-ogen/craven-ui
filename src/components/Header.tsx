type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="fixed to-primary-dark-gray from-black bg-gradient-to-b bg-primary-dark-gray border-b-[1px] border-primary-orange p-2 flex items-center w-full transition ease-in-out delay-200">
      {children}
    </header>
  );
};

export default Header;
