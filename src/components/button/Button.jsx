import './Button.scss';
export const BUTTON_TYPES = {
  GOOGLE: 'google',
  INVERTED: 'inverted',
};

export default function Button({ children, buttonType, ...others }) {
  return (
    <button {...others} className={`btn btn--${buttonType}`}>
      {children}
    </button>
  );
}