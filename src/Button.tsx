import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the button */
  children: ReactNode;

  /** Which variant you would like to use */
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blueviolet' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        padding: '10px',
        // backgroundColor: 'black',
        // color: 'black',
      }}
    >
      {children}
    </button>
  );
};
