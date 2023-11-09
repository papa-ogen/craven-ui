import CStudio from "../assets/icons/CStudio";
import Link from "./Link";
import Text from "./Text";

const Footer = ({
  children,
  size = "base",
}: {
  children?: React.ReactNode;
  size?: "base" | "sm";
}) => {
  return (
    <footer className="bg-gradient-to-b from-mauve-2 w-full flex flex-col border-t-[1px] border-orange-500">
      {children}
      <div className="flex-grow flex justify-center pt-2">
        <CStudio
          width={`${size === "base" ? "64px" : "56px"}`}
          color="#ffffff"
        />
      </div>
      <div className="flex justify-center p-3 pt-4">
        <Text size={size}>
          <Text as="span" size={size}>
            © 2023 Copyright
          </Text>{" "}
          <Link ariaLabel="Visit Craven Studio" url="https://craven-studio.com">
            Craven Studio
          </Link>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
