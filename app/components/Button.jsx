import React from "react";

export const Button = ({
  type = "button",
  onClick,
  value,
  required,
  children,
  label,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      required={required}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      {...props}
    >
      {children}
    </button>
  );
};
