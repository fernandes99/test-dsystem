import React, { ComponentProps } from "react";
import { S } from "./Button.styles";

export interface ButtonProps extends ComponentProps<'button'> {
  label: string;
  primary: boolean;
  backgroundColor?: string;
}

function Button({ label, primary, backgroundColor, ...rest }: ButtonProps) {
  return (
    <S.Container>
      <button style={{ backgroundColor, color: primary ? 'red' : 'black' }} {...rest} >
        {label}
        Eai
      </button>
    </S.Container>
  );
}

export default Button;