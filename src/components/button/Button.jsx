import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './Button.Style.jsx';
export const BUTTON_TYPES = {
  BASE: 'base',
  GOOGLE: 'google',
  INVERTED: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES.BASE) => {
  switch (buttonType) {
    case BUTTON_TYPES.GOOGLE:
      return GoogleSignInButton;
    case BUTTON_TYPES.INVERTED:
      return InvertedButton;
    default:
      return BaseButton;
  }
};

export default function Button({ children, buttonType, ...others }) {
  const Button = getButton(buttonType);
  return (
    <Button {...others} className={`btn btn--${buttonType}`}>
      {children}
    </Button>
  );
}
