import Link from "./Link";
import Paragraph from "./Paragraph";
import { ReactComponent as Logo } from "../assets/Cstudio_logo_Orange_positive_CMYK_web-01.svg";
import CStudio from "../assets/icons/CStudio";

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="h-40 bg-slate-1 w-full flex flex-col border-t-[1px] border-primary-orange">
      {children}
      <div className="flex-grow flex justify-center pt-2">
        <CStudio width="64px" color="#ffffff" />
      </div>
      <div className="flex justify-center p-3 pt-4">
        <Paragraph variant="small" noMargin>
          <span className="pr-2">© 2023 Copyright:</span>
          <Link url="https://craven-studio.com">Craven Studio</Link>
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;
