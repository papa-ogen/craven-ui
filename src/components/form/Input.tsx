import React from "react";

interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  error?: string;
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
  error,
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
        className="block w-full bg-cyan-1 rounded-sm outline-0 focus:ring-0 border-orange-8 text-slate-12 placeholder:text-cyan-7 focus:border-primary-orange disabled:bg-gray-4 disabled:border-gray-9 disabled:placeholder:text-gray-8"
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red-10 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default Input;
