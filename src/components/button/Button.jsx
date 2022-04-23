import './Button.scss';
export const BUTTON_TYPES = {
  GOOGLE: 'google',
  INVERTED: 'inverted',
};

export default function Button({ children, buttonType, ...others }) {
  return <button className={`btn btn--${buttonType}`}>{children}</button>;
}
