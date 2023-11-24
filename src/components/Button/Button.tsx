import React, { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<'button'> {
  label: string;
  primary: boolean;
  backgroundColor?: string;
}

function Button({ label, primary, backgroundColor, ...rest }: ButtonProps) {
  return (
    <div>
      <button style={{ backgroundColor, color: primary ? 'red' : 'black' }} {...rest} >
        {label}
        Eai
      </button>
    </div>
  );
}

export default Button;