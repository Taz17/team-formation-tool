import React, { AllHTMLAttributes } from 'react';

interface ButtonProps extends NativeButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;

export function Button({
  onClick,
  children,
  icon = undefined,
  iconPosition,
  className,
  ...rest
}: ButtonProps) {
  const classNames = [
    'inline-flex align-self-start max-w-fit cursor-pointer bg-blue-500 text-white px-4 py-2 rounded duration-300 ease-in-out hover:bg-blue-700',
    className ?? '',
  ].join(' ');

  return (
    <button className={classNames} onClick={onClick}>
      <div className="flex flex-row gap-2">
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </div>
    </button>
  );
}
