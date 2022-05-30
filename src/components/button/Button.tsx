import { BaseButton, GoogleSignInButton, InvertedButton } from './Button.Style';
import { FC, ButtonHTMLAttributes } from 'react';
import { PropsWithChildren } from 'react';
export enum BUTTON_TYPES {
  BASE = 'base',
  GOOGLE = 'google',
  INVERTED = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPES.BASE): typeof BaseButton => {
  switch (buttonType) {
    case BUTTON_TYPES.GOOGLE:
      return GoogleSignInButton;
    case BUTTON_TYPES.INVERTED:
      return InvertedButton;
    default:
      return BaseButton;
  }
};

type Props = {
  buttonType?: BUTTON_TYPES;
};

export type ButtonProps = PropsWithChildren<Props> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  ...others
}: ButtonProps) => {
  const Button = getButton(buttonType);
  return (
    <Button {...others} className={`btn btn--${buttonType}`}>
      {children}
    </Button>
  );
};

export default Button;
