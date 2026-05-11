import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  containerClass?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, containerClass, required, ...props }, ref) => {
    return (
      <div className={`w-full ${containerClass || ""}`}>
        <div className="w-full flex items-center justify-between mb-1">
          {label && (
            <label className="block font-body text-xs font-medium uppercase trancking-[0.08rem] text-text-tertiary">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>
        <input
          className={`w-full px-4 py-3 bg-surface font-body text-sm text-text-primary placeholder:text-text-tertiary transitiona-all duration-200  rounded-md border ${
            error ? "border-red-500" : "border-border"
          } focus:border-primary focus:shadow-[0_0_0_3px_rgba(232,104,26,0.1)] focus:outline-none ${
            className || ""
          }`}
          ref={ref}
          aria-required={required}
          aria-invalid={!!error}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
