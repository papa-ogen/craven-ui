export type ButtonVariantType = "error" | "success" | "warning" | "info";
export interface ButtonProps2 extends React.HTMLProps<HTMLButtonElement> {
}
interface ButtonProps {
    children: string;
    variant?: ButtonVariantType;
    name?: string | undefined;
    type?: "submit" | "reset" | "button" | undefined;
    disabled?: boolean;
}
declare const Button: ({ children, variant, type, disabled, }: ButtonProps) => JSX.Element;
export default Button;
