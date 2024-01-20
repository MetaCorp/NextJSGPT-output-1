import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, register, required, className }) => (
  <input id={id} type={type} placeholder={placeholder} {...register} required={required} className={className} />
);

export default Input;