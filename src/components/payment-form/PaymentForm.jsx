import { CardElement } from '@stripe/react-stripe-js';
import Button from '../button/Button';
import { BUTTON_TYPES } from '../button/Button';

const PaymentForm = () => {
  return (
    <div>
      <CardElement />
      <Button buttonType={BUTTON_TYPES.BASE}>Pay</Button>
    </div>
  );
};

export default PaymentForm;
