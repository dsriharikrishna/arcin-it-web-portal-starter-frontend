import React from "react";
import clsx from "clsx";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className, required, rows = 4, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          {...props}
          ref={ref}
          required={required}
          rows={rows}
          placeholder=" "
          className={clsx(
            "peer block w-full resize-none rounded-xl border border-slate-200 bg-white px-4 pt-5 pb-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none",
            className
          )}
        />
        <label className="absolute top-2 left-4 z-10 origin-[0] -translate-y-0 text-xs text-slate-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      </div>
    );
  }
);

TextAreaInput.displayName = "TextAreaInput";

export default TextAreaInput;
