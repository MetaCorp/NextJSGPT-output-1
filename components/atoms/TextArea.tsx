import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
  id: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ id, placeholder, register, required, className }) => (
  <textarea id={id} placeholder={placeholder} {...register} required={required} className={className} />
);

export default TextArea;