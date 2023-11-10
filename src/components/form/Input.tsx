import React, { forwardRef } from "react";

interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  name?: string;
  errorText?: string;
  hasError?: boolean;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    label,
    placeholder,
    type = "text",
    name,
    errorText,
    hasError,
    required,
    disabled,
    defaultValue,
    value,
    onChange,
    onBlur,
  } = props;
  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={id}
        >
          {required && <span className="text-red-10 mr-2">*</span>}
          {label}
        </label>
      )}
      <input
        className={`block w-full bg-cyan-1 focus:bg-cyan-2 rounded-sm outline-0 focus:ring-0 text-slate-12 placeholder:text-cyan-7 focus:border-cyan-10 disabled:bg-gray-4 disabled:border-gray-9 disabled:placeholder:text-gray-8 disabled:cursor-not-allowed ${
          hasError ? "border-red-10" : "border-cyan-8"
        }`}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
      {hasError && (
        <p className="text-red-10 text-xs italic mt-1">{errorText}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
