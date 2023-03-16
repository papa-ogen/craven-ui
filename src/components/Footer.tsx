import CStudio from "../assets/icons/CStudio";
import Link from "./Link";
import Text from "./Text";

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="bg-gradient-to-b from-mauve-2 w-full flex flex-col border-t-[1px] border-primary-orange">
      {children}
      <div className="flex-grow flex justify-center pt-2">
        <CStudio width="64px" color="#ffffff" />
      </div>
      <div className="flex justify-center p-3 pt-4">
        <Text>
          <span className="pr-2">© 2023 Copyright:</span>
          <Link ariaLabel="Visit Craven Studio" url="https://craven-studio.com">
            Craven Studio
          </Link>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
