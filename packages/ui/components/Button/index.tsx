import React, { PropsWithChildren } from 'react';

import { ButtonProps } from './types/buttonProps';

export const Button = ({
  children,
  onClick = () => {},
}: PropsWithChildren<ButtonProps>) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 p-4 rounded-md text-white"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
