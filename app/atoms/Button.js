import React from "react";

export const Button = ({
  type = "button",
  onClick,
  value,
  required,
  children,
  label,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
