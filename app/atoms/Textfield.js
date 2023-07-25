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
        <label
          for={name}
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...props}
      />
    </div>
  );
};
