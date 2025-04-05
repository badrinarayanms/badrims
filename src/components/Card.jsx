import React from "react";

export const Card = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";