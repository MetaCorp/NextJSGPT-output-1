import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type = 'button' }) => (
  <button type={type} onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;