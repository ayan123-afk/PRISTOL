import React from 'react';

const Button = ({ 
  text, 
  icon, 
  fullWidth = false,
  disabled = false,
  ...props 
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        relative overflow-hidden group
        ${fullWidth ? 'w-full' : 'px-8 py-4'}
        py-4 bg-gradient-to-r from-green-500 to-green-600 
        text-white rounded-xl font-semibold 
        transition-all duration-300
        ${disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:from-green-600 hover:to-green-700 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]'
        }
        flex items-center justify-center gap-2
      `}
    >
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
      
      <span className="absolute -top-full -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:top-full group-hover:left-full transition-all duration-1000"></span>
      
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;