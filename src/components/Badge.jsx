import React from "react";

export const Badge = ({ variant = "default", className, children, ...props }) => {
  const baseClasses = "inline-flex items-center rounded-full text-sm font-medium transition-colors";

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border text-foreground",
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};