interface InputProps {
    id: string;
    label?: string;
    placeholder?: string;
    type?: "text" | "password";
    error?: string;
    required?: boolean;
    disabled?: boolean;
}
declare const Input: ({ id, label, placeholder, type, error, required, disabled, }: InputProps) => JSX.Element;
export default Input;
