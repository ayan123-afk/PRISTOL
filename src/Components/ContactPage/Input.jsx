import React from 'react';

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
  className = ''
}) => {
  const baseClasses = `w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 ${className}`;

  if (type === 'textarea') {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={baseClasses}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={baseClasses}
    />
  );
};

export default Input;