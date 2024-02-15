import React from "react";

type ButtonProps = {
  title: String;
  onClick: any;
  className: any;
};

const Button = ({ title, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
