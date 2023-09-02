import React from "react";

interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  errorText?: string;
  hasError?: boolean;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const Input = ({
  id,
  label,
  placeholder,
  type = "text",
  errorText,
  hasError,
  required,
  disabled,
  defaultValue,
  value,
  onChange,
  onBlur,
}: InputProps) => {
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
        className={`block w-full bg-cyan-1 focus:bg-cyan-2 rounded-sm outline-0 focus:ring-0 text-slate-12 placeholder:text-cyan-7 focus:border-blue-10 disabled:bg-gray-4 disabled:border-gray-9 disabled:placeholder:text-gray-8 disabled:cursor-not-allowed ${
          hasError ? "border-red-10" : "border-blue-8"
        }`}
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && (
        <p className="text-red-10 text-xs italic mt-1">{errorText}</p>
      )}
    </div>
  );
};

export default Input;
