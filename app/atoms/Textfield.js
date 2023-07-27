import React from "react";
export const TextField = ({
  type = "text",
  name,
  onChange,
  value,
  required,
  placeholder,
  label,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        required={required}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
