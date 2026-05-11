'use client';
import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  containerClass?: string;
  required?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, label, containerClass, required, ...props }, ref) => {
    return (
      <div className={`w-full ${containerClass || ""}`}>
        <div className="w-full flex items-center justify-between mb-1">
          {label && (
            <label className="block font-medium  font-body text-xs  uppercase tracking-[0.08rem] text-text-tertiary mb-2">
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
        <textarea
          className={`w-full px-4 py-3 rounded-md border bg-surface text-sm text-text-primary placeholder:text-text-tertiary ${
            error ? "border-red-500" : "border-border"
          } focus:border-primary focus:shadow-[0_0_0_3px_rgba(232,104,26,0.1)] focus:outline-none resize-none ${
            className || ""
          }`}
          ref={ref}
          aria-required={required}
          aria-invalid={!!error}
          {...props}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;