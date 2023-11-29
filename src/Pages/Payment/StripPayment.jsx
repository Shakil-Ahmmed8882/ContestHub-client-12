import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import TitleDescription from "../../Components/Ui/TitleDescription ";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const StripePayment = () => {
  return (
    <div>
      <TitleDescription
        title="Payment"
        description="please pay to eat"></TitleDescription>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default StripePayment;
